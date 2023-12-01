"use client"

import styles from './burger-button.module.scss';
import {burger} from "@/public/svg";
import Image from "next/image";
import {BurgerMenu} from "@/app/ui/burger-menu";
import {useState} from "react";

export const BurgerButton = () => {
  const [opened, setOpened] = useState(false);
  const lockScroll = () => document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  const unlockScroll = () => document.getElementsByTagName('html')[0].style.overflowY = 'auto';

  return (
    <>
      <Image className={styles.burger} src={burger} alt="burger" onClick={() => {
        setOpened(true);
        lockScroll();
      }}/>
      <BurgerMenu opened={opened} onClose={() => {
        setOpened(false);
        unlockScroll();
      }}/>
    </>
  )
}