import { makeAutoObservable } from 'mobx';

class DrawingStore {
  backgroundCanvas: HTMLCanvasElement | null = null;
  drawingCanvas: HTMLCanvasElement | null = null;
  backgroundContext: CanvasRenderingContext2D | null = null;
  drawingContext: CanvasRenderingContext2D | null = null;
  isDrawing: boolean = false;
  isErasing: boolean = false;
  brushColor: string = '#FFEDEB';
  backgroundColor: string = '#4E5A82';
  currentLineWidth: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setCanvases(backgroundCanvas: HTMLCanvasElement, drawingCanvas: HTMLCanvasElement) {
    this.backgroundCanvas = backgroundCanvas;
    this.drawingCanvas = drawingCanvas;
    this.backgroundContext = backgroundCanvas.getContext('2d');
    this.drawingContext = drawingCanvas.getContext('2d');

    if (this.backgroundContext && this.drawingContext) {
      this.initCanvases();
    }
  }

  initCanvases() {
    if (!this.backgroundCanvas || !this.drawingCanvas || !this.backgroundContext || !this.drawingContext) return;

    [this.backgroundCanvas, this.drawingCanvas].forEach(canvas => {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    });

    this.backgroundContext.scale(2, 2);
    this.drawingContext.scale(2, 2);
    this.drawingContext.lineCap = 'round';
    this.drawingContext.strokeStyle = this.brushColor;
    this.drawingContext.lineWidth = this.currentLineWidth;

    this.setBackgroundColor(this.backgroundColor);
  }

  startDrawing(x: number, y: number) {
    if (!this.drawingContext) return;
    this.drawingContext.beginPath();
    this.drawingContext.moveTo(x, y);
    this.isDrawing = true;
  }

  draw(x: number, y: number) {
    if (!this.isDrawing || !this.drawingContext) return;

    if (this.isErasing) {
      this.drawingContext.globalCompositeOperation = 'destination-out';
      this.drawingContext.lineWidth = 20;
    } else {
      this.drawingContext.globalCompositeOperation = 'source-over';
      this.drawingContext.lineWidth = this.currentLineWidth;
    }

    this.drawingContext.globalAlpha = 0.5;
    const grain = Math.random() * 0.2 + 0.75;
    this.drawingContext.lineWidth *= grain;
    this.drawingContext.lineTo(x, y);
    this.drawingContext.stroke();
    this.drawingContext.globalAlpha = 1;
    this.drawingContext.lineWidth /= grain;
  }

  finishDrawing() {
    if (!this.drawingContext) return;
    this.drawingContext.closePath();
    this.isDrawing = false;
  }

  toggleEraser() {
    this.isErasing = !this.isErasing;
    if (this.drawingContext) {
      this.drawingContext.strokeStyle = this.isErasing ? this.backgroundColor : this.brushColor;
      this.drawingContext.globalCompositeOperation = this.isErasing ? 'destination-out' : 'source-over';
    }
  }

  setBrushColor(color: string) {
    this.brushColor = color;
    if (this.drawingContext) {
      this.drawingContext.strokeStyle = color;
    }
  }

  setBackgroundColor(color: string) {
    if (!this.backgroundContext || !this.backgroundCanvas) return;
    this.backgroundColor = color;
    this.backgroundContext.fillStyle = color;
    this.backgroundContext.fillRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height);
  }

  setLineWidth(width: number) {
    this.currentLineWidth = width;
    if (this.drawingContext) {
      this.drawingContext.lineWidth = width;
    }
  }

  takeScreenshot() {
    if (!this.backgroundCanvas || !this.drawingCanvas || !this.drawingContext) return;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = this.drawingCanvas.width;
    tempCanvas.height = this.drawingCanvas.height;
    const tempContext = tempCanvas.getContext('2d');

    if (tempContext) {
      tempContext.drawImage(this.backgroundCanvas, 0, 0);
      tempContext.drawImage(this.drawingCanvas, 0, 0);

      const dataUrl = tempCanvas.toDataURL('image/png');
      const link = document.createElement('a');

      link.href = dataUrl;
      link.download = 'screenshot.png';
      link.click();
    }
  }

  resetCanvas() {
    if (this.drawingCanvas && this.drawingContext) {
      this.drawingContext.clearRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height);
    }

    this.initCanvases();
  }
}

export const drawingStore = new DrawingStore();
