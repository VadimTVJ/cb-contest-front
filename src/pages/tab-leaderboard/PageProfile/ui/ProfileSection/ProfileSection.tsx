import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { ProfileCard, userApi } from '../../../../../entities/user';
import styles from './ProfileSection.module.scss';

export interface ProfileSectionProps extends ComponentProps<'div'> {
  tgId: number;
}

export const ProfileSection = forwardRef<HTMLDivElement, ProfileSectionProps>((props, forwardedRef) => {
  const { className, tgId, ...rest } = props;

  const { data, status } = userApi.useUserQuery({
    params: { tgId }
  });

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.ProfileSection, className)}
      {...rest}
    >
      {/* todo skeleton state */}
      {/* {status === 'pending' && 'skeleton'} */}

      {status === 'success' && <ProfileCard user={data} />}
    </div>
  );
});

ProfileSection.displayName = 'ProfileSection';
