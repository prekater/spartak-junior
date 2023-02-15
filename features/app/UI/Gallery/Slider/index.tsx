import { useState } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import styles from './Slider.module.scss'

interface IPropsPopUp {
  clickedImg: string
  setClickedImg: (img: string | null) => void
  stopScroll: () => void
  galleryLength: number
}

export default function Slider({ galleryLength, clickedImg, setClickedImg, stopScroll }: IPropsPopUp) {
  const split = clickedImg.split('/')[3].split('.')[0].trim()
  const [slideIndex, setSlideIndex] = useState(Number(split))
  const [revers, setRevers] = useState<boolean | null>(null)

  const nextSlide = () => {
    setRevers(true)
    if (slideIndex !== galleryLength) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === galleryLength) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    setRevers(false)
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(galleryLength)
    }
  }
  const handleClick = () => {
    setClickedImg(null)
  }

  return (
    <div className={styles.root}>
      <button
        className={styles.cross}
        onClick={() => {
          handleClick()
          stopScroll()
        }}
      />
      <div className={styles.containerSlider}>
        {Array.from({ length: galleryLength }).map((obj, index) => {
          const classNameSlide = clsx({
            [styles.visibilityNone]: slideIndex !== index + 1,
            [styles.initial]: revers === null,
            [styles.animPrev]: slideIndex === index + 1 && revers === false,
            [styles.animNext]: slideIndex === index + 1 && revers === true
          })
          return (
            <div key={index} className={classNameSlide}>
              <Image layout="fill" src={`/images/gallery/${slideIndex}.jpg`} className={styles.img} alt="foto" />
            </div>
          )
        })}
      </div>

      <button onClick={prevSlide} className={styles.arrowLeft}></button>
      <button onClick={nextSlide} className={styles.arrowRight}></button>
    </div>
  )
}
