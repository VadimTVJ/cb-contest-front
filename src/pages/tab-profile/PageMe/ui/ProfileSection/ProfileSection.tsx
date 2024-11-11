import { useLaunchParams } from '@telegram-apps/sdk-react';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, useContext } from 'react';

import { ProfileCard, userApi } from '../../../../../entities/user';
import { Icon16Moon, Icon16Sun } from '../../../../../shared/assets/icons';
import { AppContext, Scheme, Switch } from '../../../../../shared/ui';
import styles from './ProfileSection.module.scss';

export interface ProfileSectionProps extends ComponentProps<'div'> {}

export const ProfileSection = forwardRef<HTMLDivElement, ProfileSectionProps>((props, forwardedRef) => {
  const { className, ...rest } = props;

  const { scheme, setScheme } = useContext(AppContext);
  const lp = useLaunchParams();
  const { data, status } = userApi.useUserQuery({
    params: { tgId: lp.initData!.user!.id }
  });

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.ProfileSection, className)}
      {...rest}
    >
      <Switch
        className={styles.ProfileSection__schemeSwitcher}
        options={[
          { icon: <Icon16Sun />, value: 'light' },
          { icon: <Icon16Moon />, value: 'dark' }
        ]}
        value={scheme}
        onChange={(scheme) => setScheme(scheme as Scheme)}
      />

      {/* todo skeleton state */}
      {/* {status === 'pending' && 'skeleton'} */}

      {status === 'success' && <ProfileCard user={data} />}
    </div>
  );
});

ProfileSection.displayName = 'ProfileSection';
