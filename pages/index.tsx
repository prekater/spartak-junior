import Header from 'features/app/UI/Header'
import MainContent from 'features/app/UI/MainContent'

import {BottomAnnouncement} from 'features/app/UI/BottomAnnouncement'
import Footer from 'features/app/UI/Footer/'

import styles from './Home.module.scss'
import Head from 'next/head'

const Home = () => {
    return (
        <div className={styles.root}>
            <Head>
                <title>Футбольная школа «Спартак-Юниор» в Москве</title>
            </Head>
            <Header/>
            <MainContent/>
            <Footer/>
            <BottomAnnouncement/>
        </div>
    )
}

export default Home
