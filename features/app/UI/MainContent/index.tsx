import type { FC } from 'react'

import dynamic from 'next/dynamic'

import AboutSchool from '../AboutSchool'
import Account from '../Account'
import AdviceAndTest from '../AdviceAndTest'
import BottomButton from '../BottomButton'
import Coaches from '../Coaches'
import ComeToView from '../ComeToView'
import FAQ from '../FAQ'
import FootballMap from '../FootballMap'
import Gallery from '../Gallery'
import Loader from '../Loader'
import Methodology from '../Methodology'
import Reviews from '../Reviews'
import UniformStore from '../UniformStore'

const Test = dynamic(() => import('../Test'), {
    ssr: false,
}) as FC


import styles from './MainContent.module.scss'

const MainContent = () => {
  return (
    <main className={styles.root}>
      <AboutSchool />
      <FootballMap />
      <AdviceAndTest />
      <Account />
      <ComeToView />
      <Gallery />
      <Methodology />
      <Coaches />
      <Reviews />
      <FAQ />
      <UniformStore />
      <Test />
      <BottomButton />
    </main>
  )
}

export default MainContent
