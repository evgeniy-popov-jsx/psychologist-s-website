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
        name: 'Институт социальной психологии А.Шахова',
        subName: '',
        date: '1260 часов',
      },
      {
        name: 'Когнитивно - поведенческая психотерапия (КПТ)',
        subName: 'АКПП',
        date: '275 часов',
      },
      {
        name: 'Панические атаки. Краткосрочная психотерапия.',
        subName: 'Международная академия научной психологии',
        date: '16 часов.',
      },
      {
        name: 'Растройства пищевого поведения (РПП), доказательная психотерапия',
        subName: 'М.А. Зрютин',
        date: '127 часов',
      },
      {
        name: 'Основы КПТ',
        subName: 'П.В. Плясов, АКПП',
        date: ' 20 часов',
      },
      {
        name: 'Введение в терапию',
        subName: 'А.И. Муртазин',
        date: '20 часов',
      },
      {
        name: 'Реструктуризация дисфункциональных убеждений',
        subName: 'С.В.Павлов, АКПП',
        date: '20 часов',
      },
      {
        name: 'Когнитивнаяя терапия',
        subName: 'М.А.Зрютин, АКПП',
        date: '20 часов',
      },
      {
        name: 'Основы поведенческой терапии',
        subName: 'А.И.Муртазин, АКПП',
        date: '20 часов',
      },
      {
        name: 'КПТ Тревожных расстройств',
        subName: 'В.С.Габайдулин, АКПП',
        date: '20 часов',
      },
      {
        name: 'КПТ Депрессии',
        subName: 'М.Ю.Зрютин, АКПП',
        date: '20 часов',
      },
      {
        name: 'КПТ Зависимого повдеения',
        subName: 'О.А.Мошкова, АКПП',
        date: '20 часов',
      },
      {
        name: 'Углубленное изучение эмоций',
        subName: 'А.Боев, авторский курс',
        date: '30 часов',
      },
      {
        name: 'Практика в роли ассистента преподавателя',
        subName: 'Институт А.Шахова',
        date: '40 часов',
      },
    ];

    const timeoutIDs = data.map((el, index) => {
      return setTimeout(() => {
        setLinks((prevLinks) => [
          ...prevLinks,
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link key={index} props={el} />
          </motion.div>,
        ]);
      }, 100 * index);
    });

    return () => {
      timeoutIDs.forEach((timeoutID) => clearTimeout(timeoutID));
    };
  }, []);

  return (
    <Styled.Container>
      {links}
      <Message id={'education'}>
        За каждым дипломом — годы учёбы, за каждой практикой — сотни встреч.
        <br />
        Но в терапии важны не только знания, а то, как они оживают в работе. Всё, что ты
        видишь здесь, — это моя база, но главное происходит не на бумаге, а в нашем
        диалоге на сессиях.
        <br />
        <br />
        <span>
          А какие знания и навыки помогают тебе справляться с жизнью? Чему ты уже
          научился?
        </span>
      </Message>
      <Styled.BlurFooter />
    </Styled.Container>
  );
};
