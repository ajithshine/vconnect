import {useState} from 'react'
import postcss from './Post.module.css';
import Popup from '../PopUp/Popup'

export default function Post() {
    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div>
        <button onClick={()=> setButtonPopup(true)}>post</button>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <input type="file" id="img" name="img" accept="image/*" className={postcss.inimg} />
    </Popup>
    </div>
  )
}
