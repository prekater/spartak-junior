import { useState } from 'react'

import cn from 'clsx'

import TitleBanner from 'shared/components/TitleBanner/'

import { useNavigation } from '../../providers/NavigationProvider'
import { reviews } from './const'

import styles from './Reviews.module.scss'

const LIMIT = 4

const Reviews = () => {
  const { reviewsRef } = useNavigation()

  const [limit, setLimit] = useState(LIMIT)

  const loadMore = () => {
    setLimit(prev => prev + LIMIT)
  }

  return (
    <article className={styles.root} id="reviews" ref={reviewsRef}>
      <TitleBanner title="Отзывы" subtitle="Все отзывы реальные, почитайте" />
      <section className={styles.reviewsWrapper}>
        <ul className={styles.reviewsList}>
          {reviews.slice(0, limit).map(({ fullName, address, rewiew, id, image }, indexList) => {
            const reviewItemLast = cn({
              [styles.reviewItem]: indexList > reviews.length - 3
            })
            return (
              <li key={id} className={reviewItemLast}>
                <section className={styles.reviewWrap}>
                  <p className={styles.textReview}>{rewiew}</p>
                  <div className={styles.customersWrap}>
                    <div className={styles.iconWrapper} style={{ backgroundImage: `url(${image})` }} />
                    <div className={styles.textWrapper}>
                      <p className={styles.fullName}>{fullName}</p>
                      <p className={styles.address}>{address}</p>
                    </div>
                  </div>
                </section>
              </li>
            )
          })}
        </ul>
        {reviews.length > limit && (
          <button className={styles.showReviews} onClick={loadMore}>
            Показать еще отзывы
          </button>
        )}
      </section>
    </article>
  )
}

export default Reviews
