import { clsx } from 'clsx';
import { forwardRef, ReactNode } from 'react';
import Lottie from 'react-lottie-player';
import { Link } from 'react-router-dom';

import { feedModel } from '../../../../../entities/feed';
import { Icon20Plane, Icon20Receive, Icon20Shop } from '../../../../../shared/assets/icons';
import { giftsLottiesMapping } from '../../../../../shared/config/gifts-lotties';
import { Badge, Cell, CellProps } from '../../../../../shared/ui';
import styles from './FeedCell.module.scss';

const supHeadingsMapping: Record<feedModel.FeedItem['action'], string> = {
  buy_gift: 'Buy',
  sent_gift: 'Sent',
  receive_gift: 'Receive'
};

const actionIconsMapping: Record<feedModel.FeedItem['action'], ReactNode> = {
  buy_gift: <Icon20Shop />,
  sent_gift: <Icon20Plane />,
  receive_gift: <Icon20Receive />
};

export interface FeedCellProps extends CellProps {
  feedItem: feedModel.FeedItem;
}

export const FeedCell = forwardRef<HTMLDivElement, FeedCellProps>((props, forwardedRef) => {
  const { className, feedItem, ...rest } = props;
  const { purchasedGift, action } = feedItem;

  return (
    <Cell
      ref={forwardedRef}
      className={clsx(styles.FeedCell, className)}
      heading={purchasedGift.storeGift.name}
      supHeading={supHeadingsMapping[action]}
      before={(
        <Badge
          className={styles.FeedCell__before}
          rightBottomCorner={actionIconsMapping[action]}
          rightBottomOffset={[-2, 1]}
        >
          <Lottie
            play
            loop
            animationData={giftsLottiesMapping[purchasedGift.storeGift.id]}
          />
        </Badge>
      )}
      after={(
        <>
          {action === 'buy_gift' && `-${purchasedGift.storeGift.price} ${purchasedGift.storeGift.asset.name}`}
          {action === 'receive_gift' && (
            <>
              from
              {' '}
              <Link to={`/profile/${purchasedGift.customer.tgId}`}>{purchasedGift.customer.firstName}</Link>
            </>
          )}
          {action === 'sent_gift' && purchasedGift.recipient && (
            <>
              to
              {' '}
              <Link to={`/profile/${purchasedGift.recipient.tgId}`}>{purchasedGift.recipient.firstName}</Link>
            </>
          )}
        </>
      )}
      {...rest}
    />
  );
});

FeedCell.displayName = 'FeedCell';
