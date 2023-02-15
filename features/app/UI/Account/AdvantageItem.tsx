import cn from 'clsx'

import { useMedia } from 'features/app/hooks/useMedia'

import styles from './AdvantageItem.module.scss'

interface IProps {
  title: string
  text: string
  icon: string
  type: 'left' | 'right'
}

const AdvantageItem = ({ title, text, icon, type }: IProps) => {
  const lg = useMedia(`max-width: ${960 - 0.1}px)`)

  const isLeft = type === 'left'

  const isRight = type === 'right'

  const titleStyle = cn(styles.title, {
    [styles.title_left]: isLeft,
    [styles.title_right]: isRight
  })

  const textStyle = cn(styles.text, {
    [styles.text_left]: isLeft,
    [styles.text_right]: isRight
  })

  const iconStyle = cn(styles.icon, {
    [styles.icon_left]: isLeft,
    [styles.icon_right]: isRight
  })

  const img = <img className={iconStyle} src={`/images/icon/account/${icon}.svg`} alt={icon} />

  return (
    <article className={styles.root}>
      {isLeft && img}
      <section>
        <h5 className={titleStyle}>{title}</h5>
        <p className={textStyle}>{text}</p>
      </section>
      {isRight && img}
    </article>
  )
}

export default AdvantageItem
