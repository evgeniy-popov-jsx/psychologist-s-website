import { observer } from 'mobx-react-lite';
import { drawingStore } from 'application/stores/drawingStore';
import { Styled } from './styles';
import { useEffect, useRef } from 'react';

export const ToolSizeButtons: React.FC = observer(() => {
  const lineWidth = [1, 4, 7, 11, 14];
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.volume = 0.1;
    }
  }, []);

  const handleLineWidth = (value: number | null ) => {
    if (value !== null) {
      drawingStore.setLineWidth(value);
    }
  };

  const handleMouseEnter = () => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play();
    }
  };

  return (
    <Styled.ToolBtns>
      <audio ref={hoverSoundRef} src="src/assets/hover-sound.wav" preload="auto" />
      {lineWidth.map((size)=>{
        const isActive = drawingStore.currentLineWidth === size;
        return (
          <Styled.Button key={size} onClick={() => handleLineWidth(size)} onMouseEnter={handleMouseEnter}>
              <Styled.Circle $size={size} $active={isActive} />
          </Styled.Button>
        );
      })}

    </Styled.ToolBtns>
  );
});
