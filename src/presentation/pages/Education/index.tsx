import { useEffect, useState } from 'react';
import { Link } from './components/link/index.tsx';
import { Styled } from './styles.ts';
import { motion } from 'framer-motion';
import { Message } from 'presentation/components/Message/index.tsx';

export const Educations = () => {
  const [links, setLinks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17]; 
    
    const timeoutIDs = data.map((el, index) => {
      return setTimeout(() => {
        setLinks(prevLinks => [
          ...prevLinks, 
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link key={el}></Link>
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
      <Message>
        {`Мой профессиональный путь включает более 800 часов индивидуальных 
        консультаций, два года регулярной личной терапии и свыше 1600 часов 
        обучения. Я постоянно посещаю супервизии и интервизии, чтобы совершенствовать 
        свои навыки и осваивать новые методы. В своей работе я использую только 
        обоснованные и доказанные подходы, которые подтверждены положительным опытом.`}
      </Message>
      <Styled.BlurFooter />
    </Styled.Container>
  );
};
