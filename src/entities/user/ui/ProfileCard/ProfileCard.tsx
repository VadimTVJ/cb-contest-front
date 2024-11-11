import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import { Icon24Premium } from '../../../../shared/assets/icons';
import { Avatar, Badge } from '../../../../shared/ui';
import { User } from '../../model';
import styles from './ProfileCard.module.scss';

export interface ProfileCardProps extends ComponentProps<'div'> {
  user: User;
}

export const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>((props, forwardedRef) => {
  const { className, user, ...rest } = props;
  const { avatarUrl, receivedGiftsCount, firstName, lastName, hasPremium, leaderboardPosition } = user;
  const formattedGiftsCount = new Intl.NumberFormat('ru-RU').format(receivedGiftsCount);

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.ProfileCard, className)}
      {...rest}
    >
      <Badge
        className={styles.ProfileCard__avatar}
        centerBottomCorner={leaderboardPosition > 0 && <span className={styles.ProfileCard__position}>{`#${leaderboardPosition}`}</span>}
        centerBottomOffset={-8}
      >
        <Avatar
          size={100}
          src={avatarUrl}
          initials={[firstName[0], lastName?.[0]].join('')}
        />
      </Badge>

      <div className={styles.ProfileCard__name}>
        <span>{`${firstName} ${lastName}`}</span>
        {hasPremium && <Icon24Premium className={styles.ProfileCard__premIcon} />}
      </div>

      <div className={styles.ProfileCard__counter}>
        {`${formattedGiftsCount} ${receivedGiftsCount === 1 ? 'gift' : 'gifts'} received`}
      </div>
    </div>
  );
});

ProfileCard.displayName = 'ProfileCard';
