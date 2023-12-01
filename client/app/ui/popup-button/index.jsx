"use client"

import styles from './popup_button.module.scss';
import {Button} from "@/app/ui";
import {Popup} from "@/app/ui/popup";
import {useState} from "react";
import {Form} from "@/app/ui/form";
import clsx from "clsx";

export const PopupButton = ({rounded, className}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className={clsx(rounded && styles.rounded, className)} onClick={() => setIsOpen(true)}>
        Подключиться
      </Button>
      <Popup className={styles.popup} isOpen={isOpen} closePopup={() => setIsOpen(false)}>
        <h1 className={'headline_2'}>Оставьте заявку <br/> и мы с вами свяжемся</h1>
        <Form className={styles.form}/>
      </Popup>
    </>
  )
}