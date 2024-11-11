import { Variants } from 'framer-motion';

import { appLocals } from '../../../shared/config/locals';

export const animationVariants: Variants = {
  initial: () => {
    return {
      opacity: 1,
      transform: 'scale(1)',
      // filter: 'blur(0)',
      position: 'relative',
      transition: {
        duration: 0
      }
    };
  },
  exiting: () => {
    return ({
      position: 'absolute',
      opacity: 0,
      transform: 'scale(0.85)',
      // filter: 'blur(5px)',
      transition: {
        duration: appLocals.transitionsDuration
      }
    });
  }
};
