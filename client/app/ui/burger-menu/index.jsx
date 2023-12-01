"use client"

import styles from './burger-menu.module.scss';
import clsx from "clsx";
import Image from 'next/image';
import { cross } from '@/public/svg';

export const BurgerMenu = ({opened, onClose}) => {
  return (
    <>
      <div className={clsx(styles.blackout, opened && styles.blackout_opened)} onClick={onClose}/>
      <div className={clsx(styles.menu, opened && styles.menu_opened)} >
        <Image src={cross} alt={cross} onClick={onClose}/>
        <ul>
          <li>
            Преимущества
          </li>
          <li>
            Модули
          </li>
          <li>
            Подключение
          </li>
          <li>
            Основные вопросы
          </li>
          <li>
            Подключиться
          </li>
          <li>
            Открыть презентацию
          </li>
        </ul>
      </div>
    </>
  )
}