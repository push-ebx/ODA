import styles from './form.module.scss';
import {Button} from "@/app/ui";
import clsx from "clsx";

export const Form = ({className}) => {
  return (
    <div className={clsx(styles.form, className)}>
      <input type="text" placeholder={'Ваше имя'}/>
      <input type="text" placeholder={'Ваш телефон'}/>
      <Button>Отправить заявку</Button>
    </div>
  )
}