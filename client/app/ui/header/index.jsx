import styles from './header.module.scss';
import Image from 'next/image';
import { company_name, logo } from '@/public/svg';
import clsx from 'clsx';
import {PopupButton} from "@/app/ui/popup-button";
import {BurgerButton} from "@/app/ui/burger-button";

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

      <PopupButton className={styles.button} rounded/>
      <BurgerButton />
    </header>
  )
}