import { clsx } from 'clsx';
import { forwardRef, Fragment } from 'react';

import { feedApi } from '../../../../../entities/feed';
import { storeGiftModel } from '../../../../../entities/store-gift';
import { List, ListHeader, ListProps, Placeholder } from '../../../../../shared/ui';
import { RecentActionCell } from '../RecentActionCell';
import styles from './RecentActionsList.module.scss';

export interface RecentActionsListProps extends ListProps {
  storeGiftId: storeGiftModel.StoreGiftId;
}

export const RecentActionsList = forwardRef<HTMLDivElement, RecentActionsListProps>((props, forwardedRef) => {
  const { className, storeGiftId, ...rest } = props;

  const { data, status } = feedApi.useFeedQuery({
    params: {
      storeGiftId,
      actions: ['buy_gift', 'sent_gift']
    }
  });

  return (
    <List
      ref={forwardedRef}
      className={clsx(styles.RecentActionsList, className)}
      header={<ListHeader>Recently actions</ListHeader>}
      {...rest}
    >
      {status === 'pending' && 'skeleton'}

      {status === 'success' && !data.pages[0].length && (
        <Placeholder
          className={styles.RecentActionsList__placeholder}
          subHeading="So far, no one has bought this gift. Be the first!"
        />
      )}

      {status === 'success' && data.pages.map((page, index) => (
        <Fragment key={index}>
          {page.map((feedItem) => (
            <RecentActionCell
              key={feedItem.id}
              feedItem={feedItem}
            />
          ))}
        </Fragment>
      ))}
    </List>
  );
});

RecentActionsList.displayName = 'RecentActionsList';
