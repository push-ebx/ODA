import styles from './page.module.scss';
import Image from 'next/image';
import clsx from "clsx";
import { Button } from "@/app/ui";
import { Carousel } from "@/app/ui/carousel";
import { FAQ } from "@/app/ui/faq";
import { card_bg_1, card_bg_2, card_bg_3, card_bg_4, card_bg_5 } from '@/public/svg';
import { lock, people, headphone, management } from '@/public/png';
import { getCarouselButtons, getCarouselCards, getFAQ } from "@/app/api";

export default async function Home({ repo }) {
  const carousel_cards = await getCarouselCards();
  const carousel_buttons = await getCarouselButtons();
  const faq = await getFAQ();

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

        <section className={clsx(styles.cards_section, styles.section)}>
          <h2 className={'title_2'}>Удобный и гибкий</h2>
          <span className={'subhead_2'}>Все, что нужно именно вам и для вашего автопарка</span>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.description}>
                <span className={'headline_1'}>
                  Весь функционал в вашем браузере
                </span>
                <span className={'text_1'}>ODA - это облачный сервис, который не требует установки. А доступ к актуальным данным вы можете получить с любого устройства</span>
              </div>
                <Image src={card_bg_1} alt={'card_bg_1'}/>
            </div>
            <div className={styles.card}>
              <div className={styles.description}>
                <span className={'headline_1'}>
                  Простой интерфейс
                </span>
                <span className={'text_1'}>Интуитивно понятный интерфейс позволяет адаптировать сотрудника к работе до 3 раз быстрее, по сравнению с конкурентами</span>
              </div>
              <Image className={styles.centered} src={card_bg_2} alt={'card_bg_2'}/>
            </div>
            <div className={clsx(styles.card, styles.left)}>
              <div className={styles.description}>
                <span className={'headline_1'}>
                  Полная прозрачность
                </span>
                <span className={'text_1'}>Развитая система ведения логов фиксирует каждое действие, совершенное в системе</span>
              </div>
              <Image src={card_bg_3} alt={'card_bg_3'}/>
            </div>

            <div className={styles.two_cards}>
              <div className={styles.small_card}>
                <span className={'headline_1'}>Права и роли</span>
                <span className={'text_1'}>Продуманная система распределения ролей максимально позволяет избежать ошибок сотрудников</span>
                <Image src={card_bg_4} alt={'card_bg_4'}/>
              </div>
              <div className={styles.small_card}>
                <span className={'headline_1'}>Модульная система</span>
                <span className={'text_1'}>Вы самостоятельно определяете функционал системы и подключаемые модули.</span>
                <Image src={card_bg_5} alt={'card_bg_5'}/>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button>Подключиться</Button>
            <Button>Открыть презентацию</Button>
          </div>
        </section>

        <section className={clsx(styles.section, styles.carousel_section)}>
          <h2 className={'title_2'}>Сделает все за вас</h2>
          <span className={'subhead_2'}>Гибкая система модулей позволяет автоматизировать именно те процессы, которые нужны вам</span>
          <Carousel cards={carousel_cards} buttons={carousel_buttons}/>
        </section>

        <section className={clsx(styles.connect_train_section, styles.section)}>
          <h2 className={'title_2'}>Подключаем и обучаем</h2>
          <span className={'subhead_2'}>Автоматизируем ваш автопарк за несколько дней</span>
          <div className={styles.cards}>
            <div className={styles.two_cards}>
              <div className={styles.card}>
                <Image src={lock} alt={lock}/>
                <div className={styles.description}>
                  <span className={'headline_1'}>Сохраним все ваши данные</span>
                  <span className={'text_1'}>Если вы уже используете какую-либо систему управления – ваши данные будут сконвертированы для ОДЫ</span>
                </div>
              </div>
              <div className={styles.card}>
                <Image src={people} alt={people}/>
                <div className={styles.description}>
                  <span className={'headline_1'}>Обучаем сотрудников</span>
                  <span className={'text_1'}>Сотрудник поддержки проведет обучение персонала пользователя аспектам работы с системой и будет осуществлять непрерывную поддержку. Также, при подключении для пользователя станет доступен подробный мануал.</span>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={headphone} alt={headphone}/>
              <div className={styles.description}>
                <span className={'headline_1'}>Поддержка на связи 24/7</span>
                <span className={'text_1'}>Поддержка по телефону, через e-mail, через удаленное подключение. Поддержку оказывают профессиональные пользователи ОДЫ, с непосредственным опытом работы в системе, поэтому они разбираются не только в самой программе, но и в специфике бизнеса.</span>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(styles.faq_section, styles.section)}>
          <h2 className={'title_2'}>F.A.Q.</h2>
          <FAQ faq={faq}/>
        </section>

        <section className={styles.form_section}>
          <div className={styles.description}>
            <h2 className={'title_2'}>Автоматизируйте ваш автопарк</h2>
            <span className={'subhead_2'}>Оставьте заявку и мы свяжемся с вами в ближайшее время</span>
          </div>
          <div className={styles.form}>
            <input type="text" placeholder={'Ваше имя'}/>
            <input type="text" placeholder={'Ваш телефон'}/>
            <Button>Отправить заявку</Button>
          </div>
        </section>
      </div>
    </main>
  )
}