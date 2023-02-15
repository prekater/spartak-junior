import Image from 'next/image'

import styles from './FootballMap.module.scss'

const FootballMap = () => {
  return (
    <section className={styles.root}>
      <Image
        layout="fill"
        objectFit="cover"
        src="/images/Map.png"
        alt="football-map"
        sizes="(max-width: 1199.9px) 1000px, (min-width: 1200px) 1160px"
      />
    </section>
  )
}

export default FootballMap
