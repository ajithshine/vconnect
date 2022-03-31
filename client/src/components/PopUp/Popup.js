import React from 'react'
import Pop from './Popup.module.css';

export default function Popup(props) {
  return (props.trigger) ? (
    <div className={Pop.popup}>
        <div className={Pop.inner}>
            <button className={Pop.close} onClick={() => props.setTrigger(false)}>
                close
            </button>
            {props.children}
        </div>
    </div>
  ) : "";
}
