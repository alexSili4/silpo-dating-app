import { FC, useRef } from 'react';
import { IProps } from './AnimatedAppStepsList.types';
import { List, ListItem } from './AnimatedAppStepsList.styled';
import { useInView } from 'framer-motion';
import AppStep from '@MainPageComponents/AppStep';

const AnimatedAppStepsList: FC<IProps> = ({ steps }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef);
  const animate = inView ? 'visible' : 'hidden';
  const listLength = steps.length;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const elementVariants = {
    hidden: { y: 50, opacity: 0, transition },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <List
      variants={containerVariants}
      initial='hidden'
      animate={animate}
      ref={listRef}
    >
      {steps.map(({ desc, number }) => (
        <ListItem
          variants={elementVariants}
          key={number}
          listLength={listLength}
        >
          <AppStep desc={desc} number={number} />
        </ListItem>
      ))}
    </List>
  );
};

export default AnimatedAppStepsList;
