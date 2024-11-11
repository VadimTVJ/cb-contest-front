import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { userModel } from '../../../../../entities/user';
import { Icon12Gift } from '../../../../../shared/assets/icons';
import { Avatar, Cell, CellProps, SimpleSkeleton } from '../../../../../shared/ui';
import styles from './ProfileCell.module.scss';

const medalsEmojisMapping: Record<number, string> = {
  1: '🥇',
  2: '🥈',
  3: '🥉'
};

export interface ProfileCellProps extends CellProps {
  user: userModel.User;
}

export const ProfileCell = forwardRef<HTMLDivElement, ProfileCellProps>((props, forwardedRef) => {
  const {
    className,
    user,
    ...rest
  } = props;
  const {
    lastName, firstName, receivedGiftsCount, avatarUrl, leaderboardPosition
  } = user;
  const formattedGiftsCount = new Intl.NumberFormat('ru-RU').format(receivedGiftsCount);

  return (
    <Cell
      ref={forwardedRef}
      className={clsx(styles.ProfileCell, className)}
      heading={(
        <span className={styles.ProfileCell__username}>
          {[firstName, lastName].join(' ')}
        </span>
      )}
      before={<Avatar src={avatarUrl} initials={[firstName[0], lastName?.[0]].join('')} />}
      subHeading={(
        <span className={styles.ProfileCell__giftsCount}>
          <Icon12Gift />
          <span>{`${formattedGiftsCount} ${receivedGiftsCount === 0 ? 'gift' : 'gifts'}`}</span>
        </span>
      )}
      after={leaderboardPosition > 0 && (
        <span className={styles.ProfileCell__position}>
          {(medalsEmojisMapping[leaderboardPosition] && <span className={styles.ProfileCell__medal}>{medalsEmojisMapping[leaderboardPosition]}</span>) ?? `#${leaderboardPosition}`}
        </span>
      )}
      {...rest}
    />
  );
});

ProfileCell.displayName = 'ProfileCell';

export const ProfileCellSkeleton = () => {
  return (
    <Cell
      className={clsx(styles.ProfileCell)}
      heading={<SimpleSkeleton style={{ height: 20, marginBottom: 2, width: '55%' }} />}
      before={<SimpleSkeleton style={{ borderRadius: '100%', width: 40, height: 40 }} />}
      subHeading={<SimpleSkeleton style={{ height: 16, width: '45%' }} />}
    />
  );
};
