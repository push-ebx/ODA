import Image from 'next/image'
import styles from './page.module.scss'
import clsx from "clsx";
import {Button} from "@/app/ui";
import management from '@/public/images/management.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={clsx(styles.welcome_section, styles.section)}>
          <div className={styles.titles_buttons}>
            <h1 className={'title_1'}>Все процессы таксопарка в одной системе</h1>
            <span className={'subhead_1'}>Готовое решение ваших повседневных задач</span>
            <div className={styles.buttons}>
              <Button>Подключиться</Button>
              <Button>Открыть презентацию</Button>
            </div>
          </div>
          <div className={styles.image_wrapper}>
            <div className={styles.rects}>
              <div className={styles.rect}></div>
              <div className={styles.group}>
                <div className={styles.rect}></div>
                <div className={styles.rect}></div>
                <div className={styles.rect}></div>
              </div>
            </div>
            <Image src={management} alt={'management'}/>
          </div>
        </section>

        <section className={clsx(styles.grid_section, styles.section)}>
          <h2 className={'title_2'}>Удобный и гибкий</h2>
          <span className={'subhead_2'}>Все, что нужно именно вам и для вашего автопарка</span>
          <div className={styles.grid}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.left_card}></div>
            <div className={styles.right_card}></div>
          </div>
        </section>
      </div>
    </main>
  )
}