import styles from './TitleBanner.module.scss'

type TBanner = {
  title: string
  subtitle: string
}

const TitleBanner = ({ title, subtitle }: TBanner) => {
  return (
    <section className={styles.titleBanner}>
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subTitle}>{subtitle}</p>
        </div>
        <img src="/images/Label.svg" className={styles.mainLogo} alt="" />
      </div>
      <div className={styles.curveBorder}>
        <img src="/images/Trim.svg" className={styles.trimImg} />
      </div>
    </section>
  )
}

export default TitleBanner
