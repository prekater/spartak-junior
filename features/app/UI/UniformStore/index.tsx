import {useState, useEffect} from 'react'

import cn from 'clsx'
import Image from 'next/image'

import {useNavigation} from 'features/app/providers/NavigationProvider'
import {Modal} from 'shared/components/Modal/'
import {Selector} from 'shared/components/Selector/'
import TitleBanner from 'shared/components/TitleBanner/'

import styles from './UniformStore.module.scss'

const UniformStore = () => {
    const [showModal, setShowModal] = useState(false)
    const {storeRef} = useNavigation()

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div className={styles.root} id="store" ref={storeRef}>
            <TitleBanner title="Магазин атрибутики «Спартак»" subtitle="Оригинальные товары от известных брендов"/>
            <section className={styles.uniformStoreWrapper}>
                <div className={styles.imageWrapper}>
                    <Image
                        loading="lazy"
                        src="/images/formFCSM.jpg"
                        alt="Spartak Uniform"
                        fill
                        object-fit="scale-down"
                        sizes="(max-width: 639.9px) 100vw, (max-width: 959.9px) 450px,(max-width: 1199.9px) 285px,(min-width: 1200px) 345px"
                    />
                </div>
                <div className={styles.contentWrapper}>
                    <h2 className={styles.title}>Игровая форма «Спартак»</h2>
                    <p className={styles.description}>Комплект: футболка, шорты, гетры</p>
                    <p className={styles.price}> 4250 руб. </p>
                    <button type="button" className={styles.buttonForm} onClick={handleShowModal}>
                        Оформить заказ
                    </button>
                    <p className={styles.textContent}>
                        Нанесение – логотип Спартака идет стандартно на всю детскую и тренерскую экипировку. Лого -
                        жаккардовый шеврон, звезды-вышивка.
                        100% полиэстер. Легкий материал со влагоотводящими свойствами.
                        <br/>
                        <br/>
                        Технология управления влажностью Dri-FIT сохранит тело сухим. Эластичный пояс со шнурком для
                        регулировки размера. Вставки из
                        сетки для дополнительной вентиляции.
                    </p>
                </div>
                <Modal
                    title="Оформление заказа"
                    subTitle="Просто заполните форму, а мы перезвоним и уточним все детали"
                    onClose={handleShowModal}
                    isShowModal={showModal}
                >
                    <form className={styles.form}>
                        <input className={styles.input} placeholder="Ваше имя"/>
                        <Selector selectorInputClassName={styles.select}
                                  selectorWrapperClassName={styles.selectWrapper}/>
                        <div className={cn(styles.errorBlock, styles.hide)}>Пожалуйста, заполните все обязательные
                            поля
                        </div>
                        <button type="submit" className={cn(styles.buttonForm, styles.buttonForm_submit)}>
                            Оформить заказ
                        </button>
                    </form>
                </Modal>
            </section>
        </div>
    )
}

export default UniformStore
