import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { userApi } from '../../../../../entities/user';
import { List } from '../../../../../shared/ui';
import { ProfileCell, ProfileCellSkeleton } from '../ProfileCell';
import styles from './LeaderboardSection.module.scss';

export interface LeaderboardSectionProps extends ComponentProps<'div'> {}

export const LeaderboardSection = forwardRef<HTMLDivElement, LeaderboardSectionProps>((props, forwardedRef) => {
  const { className, ...rest } = props;

  const { data, status } = userApi.useUsersQuery();

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.LeaderboardSection, className)}
      {...rest}
    >
      <List>
        {status === 'pending' && [...Array(10)].map((_, index) => (
          <ProfileCellSkeleton key={index} />
        ))}

        {status === 'success' && data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((user) => (
              <Link key={user.id} to={`/profile/${user.tgId}`}>
                <ProfileCell
                  user={user}
                />
              </Link>
            ))}
          </Fragment>
        ))}
      </List>
    </div>
  );
});

LeaderboardSection.displayName = 'LeaderboardSection';
