import { useEffect, useState } from 'react';
import { Link } from './components/link/index.tsx';
import { Styled } from './styles.ts';
import { motion } from 'framer-motion';

export const Educations = () => {
  const [links, setLinks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17]; 
    
    const timeoutIDs = data.map((_, index) => {
      return setTimeout(() => {
        setLinks(prevLinks => [
          ...prevLinks, 
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link key={index}></Link>
          </motion.div>
        ]);
      }, 100 * index);
    });

    return () => {
      timeoutIDs.forEach(timeoutID => clearTimeout(timeoutID));
    };
  }, []);

  return (
    <Styled.Container>
      {links}
      <Styled.BlurFooter />
    </Styled.Container>
  );
};
