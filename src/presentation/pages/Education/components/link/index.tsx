// import { useState, useEffect, MouseEvent as ReactMouseEvent } from 'react';
// import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Styled } from './styles.ts';
import { CrypticTextAnimation } from '../crypticText/index.tsx';

export const Link = () => {
//   const [showPhoto, setShowPhoto] = useState(false);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const photoX = useTransform(x, value => value);
//   const photoY = useTransform(y, value => value);

//   const springConfig = { stiffness: 300, damping: 30 };
//   const xSpring = useSpring(photoX, springConfig);
//   const ySpring = useSpring(photoY, springConfig);

//   const handleMouseEnter = (event: ReactMouseEvent<HTMLAnchorElement>) => {
//     setShowPhoto(true);
//     const { clientX, clientY } = event;
//     x.set(clientX);
//     y.set(clientY);
//   };

//   const handleMouseLeave = () => {
//     setShowPhoto(false);
//   };

//   const handleMouseMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
//     const { clientX, clientY } = event;
//     x.set(clientX);
//     y.set(clientY);
//   };

//  useEffect(() => {
//     const updatePosition = (event: MouseEvent) => {
//       x.set(event.clientX + 90);
//       y.set(event.clientY - 90);
//     };
    
//     document.addEventListener('mousemove', updatePosition);
    
//     return () => document.removeEventListener('mousemove', updatePosition);
//   }, [x, y]);
  
  return (
    <Styled.Link 
      to={''} 
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // onMouseMove={handleMouseMove}
    >
      {/* {showPhoto && (
        <motion.div
          style={{
            position: 'fixed',
            top: ySpring,
            left: xSpring,
            pointerEvents: 'none',
            zIndex: 99,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <Styled.PhotoBlock src={'src/assets/photo.webp'}/>
        </motion.div>
      )} */}
      <Styled.Span $type={'education'}><CrypticTextAnimation fullText='Образование'/></Styled.Span>
      <Styled.Span $type={'desc'}><CrypticTextAnimation fullText='Краткое описание образования'/></Styled.Span>
      <Styled.Line></Styled.Line>
      <Styled.Span $type={'year'}><CrypticTextAnimation fullText='2024'/></Styled.Span>
    </Styled.Link>
  );
};
