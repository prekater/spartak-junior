import cn from 'clsx'

import styles from './FreeLessonButton.module.scss'

interface IProps {
  className?: string
  onClick: () => void
  title: string
}

const FreeLessonButton = ({ className, onClick, title }: IProps) => {
  const currentClassName = cn(styles.root, className)
  return (
    <button onClick={onClick} className={currentClassName}>
      {title}
    </button>
  )
}

export default FreeLessonButton
