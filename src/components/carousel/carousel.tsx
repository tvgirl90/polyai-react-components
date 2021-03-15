import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap'
import { batch } from '../../utils'
import styles from './carousel.module.scss'

interface PAICarouselProps {
  data: any[]
  generator: (element: any, key: number) => JSX.Element
}

const PAICarousel: React.FunctionComponent<PAICarouselProps> = ({
  data,
  generator
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [minLength, setMinLength] = useState(2)

  const updateCarousel = () => {
    if (window.innerWidth < 960) {
      // taille où deux un à côté de l'autre c'est laid / s'embarque dessus
      setMinLength(1)
    } else if (window.innerWidth < 1300) {
      // > 1200 = large laptops and desktops
      setMinLength(2)
    } else if (window.innerWidth < 1600) {
      setMinLength(3)
    } else {
      setMinLength(4)
    }
  }

  useEffect(() => {
    updateCarousel()
    window.addEventListener('resize', updateCarousel)

    return () => window.removeEventListener('resize', updateCarousel)
  })

  const slides = batch(data, minLength).map((dataBatch: any[], i: number) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <div className={styles['speaker-wrapper']}>
          {dataBatch.map((element: any, j: number) => generator(element, j))}
        </div>
      </CarouselItem>
    )
  })

  const next = () => {
    if (animating) return
    if (slides.length === 1) return
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    if (slides.length === 1) return
    const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  return (
    <div className={styles['pai-carousel']}>
      <div>
        <Carousel
          ride='carousel'
          interval={data.length > minLength ? '2000' : false}
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {slides}

          {slides.length > 1 && (
            <div>
              <CarouselControl
                direction='prev'
                directionText='Previous'
                onClickHandler={previous}
              />
              <CarouselControl
                direction='next'
                directionText='Next'
                onClickHandler={next}
              />
            </div>
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default PAICarousel
