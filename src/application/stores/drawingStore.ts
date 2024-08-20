import { makeAutoObservable } from 'mobx';

class DrawingStore {
  canvas: HTMLCanvasElement | null = null;
  context: CanvasRenderingContext2D | null = null;
  isDrawing: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    if (this.context) {
      this.initCanvas();
    }
  }

  initCanvas() {
    if (!this.canvas || !this.context) return;
    this.canvas.width = window.innerWidth * 2;
    this.canvas.height = window.innerHeight * 2;
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
    this.context.scale(2, 2);
    this.context.lineCap = 'round';
    this.context.strokeStyle = 'green';
    this.context.lineWidth = 5;
  }

  startDrawing(x: number, y: number) {
    if (!this.context) return;
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.isDrawing = true;
  }

  draw(x: number, y: number) {
    if (!this.isDrawing || !this.context) return;
    this.context.lineTo(x, y);
    this.context.stroke();
  }

  finishDrawing() {
    if (!this.context) return;
    this.context.closePath();
    this.isDrawing = false;
  }

  takeScreenshot() {
    if (!this.canvas) return;
    const dataUrl = this.canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'screenshot.png';
    link.click();
  }

  handleMouseDown(event: MouseEvent) {
    const x = event.offsetX;
    const y = event.offsetY;
    this.startDrawing(x, y);
  }

  handleMouseMove(event: MouseEvent) {
    const x = event.offsetX;
    const y = event.offsetY;
    this.draw(x, y);
  }

  handleTouchStart(event: TouchEvent) {
    const touch = event.touches[0];
    const x = touch.clientX - (this.canvas?.getBoundingClientRect().left ?? 0);
    const y = touch.clientY - (this.canvas?.getBoundingClientRect().top ?? 0);
    this.startDrawing(x, y);
  }

  handleTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    const x = touch.clientX - (this.canvas?.getBoundingClientRect().left ?? 0);
    const y = touch.clientY - (this.canvas?.getBoundingClientRect().top ?? 0);
    this.draw(x, y);
  }
}

export const drawingStore = new DrawingStore();
