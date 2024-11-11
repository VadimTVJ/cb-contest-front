import { clsx } from 'clsx';
import { HTMLMotionProps, motion, useScroll, useTransform, useWillChange } from 'framer-motion';
import mergeRefs from 'merge-refs';
import { forwardRef, RefObject, useRef } from 'react';

import { Icon48Gift } from '../../../../../shared/assets/icons';
import { Placeholder } from '../../../../../shared/ui';
import styles from './HeroSection.module.scss';

export interface HeroSectionProps extends HTMLMotionProps<'div'> {
  containerRef: RefObject<HTMLDivElement>;
}

export const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>((props, forwardedRef) => {
  const {
    className,
    containerRef,
    ...rest
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const willChange = useWillChange();
  const { scrollYProgress } = useScroll({
    offset: ['170px', '0'],
    container: containerRef,
    layoutEffect: false
  });
  const scale = useTransform(scrollYProgress, (latest) => 0.75 + 0.25 * (latest || 1));

  return (
    <motion.div
      ref={mergeRefs(ref, forwardedRef)}
      className={clsx(styles.HeroSection, className)}
      style={{ scale, willChange }}
      {...rest}
    >
      <Placeholder
        icon={<Icon48Gift color="var(--accent-primary)" />}
        heading="Buy and send Gifts"
        subHeading="Unique gifts for everyone by Crypto Pay"
      />
    </motion.div>
  );
});

HeroSection.displayName = 'HeroSection';
