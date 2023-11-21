import styles from './header.module.scss';
import Image from 'next/image';
import logo from '@/public/icons/logo.svg';
import company_name from '@/public/images/company-name.svg';
import clsx from 'clsx';
import { Button } from "@/app/ui";

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

      <Button className={styles.button}>Подключиться</Button>
    </header>
  )
}