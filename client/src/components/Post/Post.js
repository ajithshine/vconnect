import {useState} from 'react'
import Popup from '../PopUp/Popup'

export default function Post() {
    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div>
        <button onClick={()=> setButtonPopup(true)}>post</button>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <input type="image" />
    </Popup>
    </div>
  )
}
