import Head from 'next/head'
import Script from 'next/script'

import Header from 'features/app/UI/Header'
import MainContent from 'features/app/UI/MainContent'

import {BottomAnnouncement} from 'features/app/UI/BottomAnnouncement'
import Footer from 'features/app/UI/Footer/'

import styles from './Home.module.scss'

const Home = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <meta
                    name="description"
                    content="Официальный представитель детских футбольных школ Спартак-Юниор. Набор детей от 4 лет. Первая тренировка бесплатная!"
                />
                <title>Футбольная школа «Спартак-Юниор» в Москве</title>
            </Head>
            {/*  скрипт для анимации в галерее*/}
            <Script src="wow.min.js"/>
            <script>new WOW().init();</script>
            <div className={styles.root}>
                <Header/>
                <MainContent/>
                <Footer/>
                <BottomAnnouncement/>
            </div>
        </>
    )
}

export default Home
