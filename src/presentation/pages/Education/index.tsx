import { useEffect, useState } from 'react';
import { Link } from './components/link/index.tsx';
import { Styled } from './styles.ts';
import { motion } from 'framer-motion';
import { Message } from 'presentation/components/Message/index.tsx';

export const Educations = () => {
  const [links, setLinks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const data = [
      {
        name: 'ОКПП: теория и практика',
        subName: 'Д.В. Ковпак',
        date: '2024',
      },
      {
        name: 'Введение в терапию. Терапевтические отношения',
        subName: 'П.В. Плясов',
        date: '2024',
      },
      {
        name: 'Концептуализация и реструктуризация дисфункциональных убеждений',
        subName: 'С.В. Павлов',
        date: '2024',
      },
      {
        name: 'Когнитивная терапия',
        subName: 'М.А. Зрютин',
        date: '2024',
      },
      {
        name: 'Рационально - эмотивная - поведенческая терапия (РЭПТ)',
        subName: 'С.Е. Падве',
        date: '2024',
      },
      {
        name: 'Основы поведенческой терапии',
        subName: 'А.И. Муртазин',
        date: '2023',
      },
      {
        name: 'Когнитивно - поведенческая терапия зависимого поведения',
        subName: 'О.А. Мошкова',
        date: '2023',
      },
      {
        name: 'Супервизия кейсов в подходе КПТ',
        subName: 'В.С. Габайдулин',
        date: '2023',
      },
      {
        name: 'ОКПП: теория и практика',
        subName: 'Д.В. Ковпак',
        date: '2024',
      },
      {
        name: 'Введение в терапию. Терапевтические отношения',
        subName: 'П.В. Плясов',
        date: '2024',
      },
      {
        name: 'Концептуализация и реструктуризация дисфункциональных убеждений',
        subName: 'С.В. Павлов',
        date: '2024',
      },
      {
        name: 'Когнитивная терапия',
        subName: 'М.А. Зрютин',
        date: '2024',
      },
      {
        name: 'Рационально - эмотивная - поведенческая терапия (РЭПТ)',
        subName: 'С.Е. Падве',
        date: '2024',
      },
      {
        name: 'Основы поведенческой терапии',
        subName: 'А.И. Муртазин',
        date: '2023',
      },
      {
        name: 'Когнитивно - поведенческая терапия зависимого поведения',
        subName: 'О.А. Мошкова',
        date: '2023',
      },
      {
        name: 'Супервизия кейсов в подходе КПТ',
        subName: 'В.С. Габайдулин',
        date: '2023',
      },
    ]; 
    
    const timeoutIDs = data.map((el, index) => {
      return setTimeout(() => {
        setLinks(prevLinks => [
          ...prevLinks, 
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link 
                key={index}
                props={el}
              >
              </Link>
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
      <Message id={'education'}>
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
