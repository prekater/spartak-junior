import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Logo.module.scss'

interface IProps {
  isFixed: boolean
}

const Logo = ({ isFixed }: IProps) => {
  const linkStyles = cn(styles.root, { [styles.root_fixed]: isFixed })

  return (
    <Link href="/" passHref legacyBehavior>
      <a className={linkStyles}>
        <Image src="/images/logo/LogoSchool.svg" fill alt="Футбольная школа «Спартак Юниор»" />
      </a>
    </Link>
  )
}

export default Logo
