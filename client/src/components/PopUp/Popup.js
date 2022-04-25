import React from 'react'
import Pop from './Popup.module.css';
import { GrClose } from "react-icons/gr";

export default function Popup(props) {
  return (props.trigger) ? (
    <div className={Pop.popup}>
        <div className={Pop.inner}>
            <button className={Pop.close} onClick={() => props.setTrigger(false)}>
                <GrClose />
            </button>
            {props.children}
        </div>
    </div>
  ) : "";
}
