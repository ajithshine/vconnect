import {useState} from 'react'
import { Link } from 'react-router-dom';
import postcss from './Post.module.css';
import Popup from '../PopUp/Popup'

export default function Post() {
    const [buttonPopup, setButtonPopup]= useState(false);
  return (
    <div>
        <button onClick={()=> setButtonPopup(true)}>post</button>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} className={postcss.post}>
          
       
        <div className={postcss.inner}>
        <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple className={postcss.img} />
      
        <br />
        <textarea type="text" className={postcss.textarea}></textarea>
        <button type="submit" className="send"><Link to="/" className='sendlink'>Post</Link> </button>

        </div>
    </Popup>
    </div>
  )
}
