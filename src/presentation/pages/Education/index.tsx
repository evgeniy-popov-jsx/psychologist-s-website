import { useEffect, useState } from 'react';
import { Link } from './components/link/index.tsx';
import { Styled } from './styles.ts';

export const Educations = () => {
  const [links, setLinks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const data = [1, 2, 3, 4, 5, 6]; 
    
    const timeoutIDs = data.map((_, index) => {
      return setTimeout(() => {
        setLinks(prevLinks => [...prevLinks, <Link key={index} />]);
      }, 100 * index);
    });

    return () => {
      timeoutIDs.forEach(timeoutID => clearTimeout(timeoutID));
    };
  }, []);

  return (
    <Styled.Container>
      {links}
    </Styled.Container>
  );
};
