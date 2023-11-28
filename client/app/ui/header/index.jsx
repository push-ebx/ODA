import styles from './header.module.scss';
import Image from 'next/image';
import { company_name, burger, logo } from '@/public/svg';
import clsx from 'clsx';
import { Button } from "@/app/ui";
import {PopupButton} from "@/app/ui/popup-button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image className={styles.icon} src={logo} alt="logo"/>
        <Image className={styles.name} src={company_name} alt="company_name"/>
      </div>

      <nav className={clsx('text_2', styles.navbar)}>
        <span>Преимущества</span>
        <span>Модули</span>
        <span>Подключение</span>
        <span>Основные вопросы</span>
      </nav>

      {/*<Button className={styles.button}>Подключиться</Button>*/}
      <PopupButton rounded/>
      <Image className={styles.burger} src={burger} alt="burger"/>
    </header>
  )
}