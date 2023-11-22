"use client"

import styles from './carousel.module.scss';
import clsx from 'clsx';
import {useState} from "react";
import {Button} from "@/app/ui";
import Image from 'next/image'

// cards: [{body_button, title, image, list[]}]
export const Carousel = ({cards, className}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={clsx(styles.carousel, className)}>
      <div className={styles.buttons}>
        {
          cards.map((card, i) => (
            <Button
              className={clsx(i === currentSlide && styles.active)}
              key={i}
              onClick={() => setCurrentSlide(i)}
            >
              <Image src={card.icon_button} alt={card.icon_button} /> {card.text_button}
            </Button>
          ))
        }
      </div>
      <div
        className={styles.slider}
        style={{transform: `translateX(calc(${-100 * currentSlide}% - ${15 * currentSlide}rem))`}}
      >
        {
          cards.map((card, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.card_info}>
                <span className={'headline_2'}>{card.title}</span>
                <ul>
                  { card.list.map((item, j) => (<li key={j} className={'text_1'}>{item}</li>)) }
                </ul>
              </div>
              <Image src={card.image} alt={card.image}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}