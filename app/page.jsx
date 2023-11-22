import styles from './page.module.scss';
import Image from 'next/image';
import clsx from "clsx";
import { Button } from "@/app/ui";
import { Carousel } from "@/app/ui/carousel";
import { FAQ } from "@/app/ui/faq";
import { coins, car, settings, car_service, building, brain, man, driver, card_bg_1, card_bg_2, card_bg_3, card_bg_4, card_bg_5 } from '@/public/svg';
import { slide_1, lock, people, headphone, management } from '@/public/png';


export default function Home() {
  const cards = [
    {text_button: 'Финансы', icon_button: coins, title: 'Финансы и бухгалтерия', image: slide_1, list: [
      'Бухгалтерия/налоги',
      'Прозрачные расчеты с водителями',
      'Поддержка платежных терминалов в офисе пользователя',
      'Интеграция с удобными для пользователя платежными системами'
    ]},
    {text_button: 'Работа с авто', icon_button: car, title: 'Контроль состояния авто', image: slide_1, list: [
      'Список авто, их статус',
      'Пред/пострейсовые осмотры с интуитивно понятным интерфейсом',
      'Отметки повреждений и их оценки',
      'Сервис работы с ДТП'
    ]},
    {text_button: 'Работа с водителями', icon_button: settings, title: 'Оценка и контроль водителей', image: slide_1, list: [
      'Полная история взаимодействия с водителем в одном окне',
      'Оценка эффективности водителя для парка (система рейтинга)',
      'Выдача путевых листов',
      'Сервис работы с ДТП',
      'Автоматический сбор информации об всех штрафах и их оплата'
    ]},
    {text_button: 'Автосервис', icon_button: car_service, title: 'Полное техническое обслуживание', image: slide_1, list: [
      'Список требующих сервис авто, с описанием причины, назначением даты, ответственного, текущего этапа ремонта, его продолжительности',
      'Список доступных СТО с отображением их загруженности, для удобства маршрутизации',
      'Список сотрудников СТО, автомобиля и типа ремонта, над которыми они работают, назначение очереди работ',
    ]},
    {text_button: 'Склад', icon_button: building, title: 'Запасы и учет', image: slide_1, list: [
      'Контроль входящих и исходящих запчастей',
      'Опция заказа необходимых деталей как с собственного центрального склада, так и на маркетплейсах',
      'Облегчение инвентаризации (каждой детали присваивается конкретное место на складе)',
      'Контроль учета необходимых запчастей для конкретного вида ремонта',
    ]},
    {text_button: 'Менеджмент и CRM', icon_button: brain, title: 'Интегрированная CRM система', image: slide_1, list: [
      'Обработка входящих запросов (звонки, сообщения)',
      'Работа с исходящими звонками и сообщениями (звонки водителям, пуши в приложение)',
      'Оценка работы сотрудников (количество звонков, их эффективность)',
      'Возможность назначать исполнителя задачи',
    ]},
    {text_button: 'Модуль руководителя', icon_button: man, title: 'Полный контроль показателей автопарка', image: slide_1, list: [
      'Исчерпывающая аналитика по состоянию автопарка, финансовых потоков и работе сотрудников с простой визуализацией на верхнем уровне, но с возможностью провалиться до конкретного авто/водителя/сотрудника'
    ]},
    {text_button: 'Приложение водителя', icon_button: driver, title: 'Удобное приложение для водителя', image: slide_1, list: [
      'Контроль заработка',
      'Погашение аренды/ДТП/штрафов в автоматическом режиме',
      'Возможность заправиться с баланса ОДЫ на АЗС партнерах со скидкой',
      'Получение сообщений от парка',
      'Возможность записаться на сервис/мойку/шиномонтаж'
    ]}
  ];
  const faq = [
    {
      question: 'Почему именно ODA?',
      answer: 'Оставьте заявку на сайте, наш менеджер свяжется с вами и расскажет о всех вариантов тарифов и подключении отдельных модулей. Вы сможете выбрать гибкий вариант тарификации, который соответствует вашим требованиям и бюджету. '
    },
    {
      question: 'Где я могу узнать цену?',
      answer: 'Оставьте заявку здесь, наш менеджер свяжется с вами'
    },
    {
      question: 'Как подключиться?',
      answer: 'Свяжитесь с нами одним из удобных для вас способом: \n' +
        '\n' +
        'тел.: +7 (499) 444-77-08 \n' +
        '\n' +
        'e-mail: odasmart@yandex.ru\n' +
        '\n' +
        'Форма обратной связи'
    },
    {
      question: 'Не нашел нужного для меня функционала, куда обращаться?',
      answer: 'Свяжитесь с нами одним из удобных для вас способом: \n' +
        '\n' +
        'тел.: +7 (499) 444-77-08 \n' +
        '\n' +
        'e-mail: odasmart@yandex.ru\n' +
        '\n' +
        'Форма обратной связи'
    }
  ];

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
          <Carousel cards={cards} />
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