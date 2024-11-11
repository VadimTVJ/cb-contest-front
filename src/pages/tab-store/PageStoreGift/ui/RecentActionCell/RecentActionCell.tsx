import { clsx } from 'clsx';
import { forwardRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { feedModel } from '../../../../../entities/feed';
import { Icon20Plane, Icon20Receive, Icon20Shop } from '../../../../../shared/assets/icons';
import { Avatar, Badge, Cell, CellProps } from '../../../../../shared/ui';
import styles from './RecentActionCell.module.scss';

const supHeadingsMapping: Record<feedModel.FeedItem['action'], string> = {
  buy_gift: 'Buy gift',
  sent_gift: 'Send gift',
  receive_gift: 'Receive gift'
};

const actionIconsMapping: Record<feedModel.FeedItem['action'], ReactNode> = {
  buy_gift: <Icon20Shop />,
  sent_gift: <Icon20Plane />,
  receive_gift: <Icon20Receive />
};

export interface RecentActionCellProps extends CellProps {
  feedItem: feedModel.FeedItem;
}

export const RecentActionCell = forwardRef<HTMLDivElement, RecentActionCellProps>((props, forwardedRef) => {
  const { className, feedItem, ...rest } = props;
  const { purchasedGift, action } = feedItem;

  return (
    <Cell
      ref={forwardedRef}
      className={clsx(styles.RecentActionCell, className)}
      supHeading={supHeadingsMapping[action]}
      heading={(
        <>
          {action === 'buy_gift' && (
            <>
              <Link to={`/profile/${purchasedGift.customer.tgId}`}>{purchasedGift.customer.firstName}</Link>
              {' '}
              bought a gift
            </>
          )}

          {action === 'sent_gift' && purchasedGift.recipient && (
            <>
              <Link to={`/profile/${purchasedGift.customer.tgId}`}>{purchasedGift.customer.firstName}</Link>
              {' '}
              sent gift to
              {' '}
              <Link to={`/profile/${purchasedGift.recipient.tgId}`}>{purchasedGift.recipient.firstName}</Link>
            </>
          )}
        </>
      )}
      before={(
        <Badge rightBottomCorner={actionIconsMapping[action]} rightBottomOffset={[-2, 1]}>
          <Avatar
            src={purchasedGift.customer.avatarUrl}
            initials={[purchasedGift.customer.firstName[0], purchasedGift.customer?.lastName?.[0]].join('')}
          />
        </Badge>
      )}
      {...rest}
    />
  );
});

RecentActionCell.displayName = 'RecentActionCell';
