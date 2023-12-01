"use client"

import styles from './form.module.scss';
import {Button} from "@/app/ui";
import clsx from "clsx";
import {Checkbox} from "@/app/ui/checkbox";
import {useState} from "react";

export const Form = ({className}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={clsx(styles.form, className)}>
      <input type="text" placeholder={'Ваше имя'}/>
      <input type="text" placeholder={'Ваш телефон'}/>
      <Checkbox checked={checked} onClick={() => setChecked(prev => !prev)} />
      <Button>Отправить заявку</Button>
    </div>
  )
}