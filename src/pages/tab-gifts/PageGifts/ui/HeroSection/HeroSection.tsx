import { clsx } from 'clsx';
import { HTMLMotionProps, motion, useScroll, useTransform, useWillChange } from 'framer-motion';
import mergeRefs from 'merge-refs';
import { forwardRef, useRef } from 'react';

import { Placeholder } from '../../../../../shared/ui';
import styles from './HeroSection.module.scss';

export interface HeroSectionProps extends HTMLMotionProps<'div'> {}

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>((props, forwardedRef) => {
  const {
    className,
    ...rest
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const willChange = useWillChange();
  const { scrollYProgress } = useScroll({
    offset: ['170px', '0']
  });
  const scale = useTransform(scrollYProgress, (latest) => 0.75 + 0.25 * latest);

  return (
    <motion.div
      ref={mergeRefs(ref, forwardedRef)}
      className={clsx(styles.HeroSection, className)}
      style={{ scale, willChange }}
      {...rest}
    >
      <Placeholder
        heading="Send Gifts in Telegram"
        subHeading="Send gifts to users that can be stored in their app profile."
      />
    </motion.div>
  );
});

HeroSection.displayName = 'HeroSection';
