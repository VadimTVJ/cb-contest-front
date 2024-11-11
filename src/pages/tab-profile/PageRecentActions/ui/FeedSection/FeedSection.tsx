import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, Fragment } from 'react';

import { feedApi } from '../../../../../entities/feed';
import { EmptyHistoryPlaceholder } from '../EmptyHistoryPlaceholder';
import { FeedCell } from '../FeedCell';
import styles from './FeedSection.module.scss';

export interface FeedSectionProps extends ComponentProps<'div'> {}

export const FeedSection = forwardRef<HTMLDivElement, FeedSectionProps>((props, forwardedRef) => {
  const { className, ...rest } = props;

  const { data, status } = feedApi.useFeedQuery();

  return (
    <div
      ref={forwardedRef}
      className={clsx(styles.FeedSection, className)}
      {...rest}
    >
      {/* todo skeleton state */}
      {/* {status === 'pending' && 'skeleton'} */}

      {status === 'success' && !data.pages[0].length && <EmptyHistoryPlaceholder />}

      {(status === 'success' && !!data.pages[0].length) && data.pages.map((page, index) => (
        <Fragment key={index}>
          {page.map((feedItem) => (
            <FeedCell
              key={feedItem.id}
              feedItem={feedItem}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
});

FeedSection.displayName = 'FeedSection';
