import { Variants } from 'framer-motion';

import { appLocals } from '../../../shared/config/locals';

export const animationVariants: Variants = {
  initial: () => {
    return ({
      y: 35,
      opacity: 0,
      scale: 0.9
      // filter: 'blur(5px)'
    });
  },
  entering: () => {
    return ({
      y: 0,
      scale: 1,
      opacity: 1,
      // filter: 'blur(0px)',

      transition: {
        // filter: {
        //   delay: appLocals.transitionsDuration * 2 / 8,
        //   duration: appLocals.transitionsDuration * 6 / 8
        // },
        scale: {
          delay: appLocals.transitionsDuration * 3 / 8,
          duration: appLocals.transitionsDuration * 5 / 8,
          ease: 'easeOut'
        },
        opacity: {
          delay: appLocals.transitionsDuration * 3 / 8,
          duration: appLocals.transitionsDuration * 5 / 8
        },
        y: {
          delay: appLocals.transitionsDuration * 3 / 8,
          duration: appLocals.transitionsDuration * 5 / 8,
          ease: 'easeOut'
        }
      }
    });
  },
  exiting: () => {
    return {
      position: 'absolute',
      opacity: 0,
      transition: {
        duration: 0
      }
    };
  }
};
