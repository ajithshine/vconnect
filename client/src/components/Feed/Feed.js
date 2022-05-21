import React from 'react'
import feedcss from './Feed.module.css';
export default function Feed() {
  return (
    <div>
        <div className={feedcss.outer}>
          <div className={feedcss.inner}>
            <div className={feedcss.box}>
                {/* <img src={`data:image/png;base64,${product.img.data}`} /> */}
            <div className={feedcss.naming}>abcd</div>
            <div className={feedcss.post}></div>
            </div>
            <div className={feedcss.box}>
                {/* <img src={`data:image/png;base64,${product.img.data}`} /> */}
            <div className={feedcss.naming}>abcd</div>
            <div className={feedcss.post}></div>
            </div>
            <div className={feedcss.box}>
                {/* <img src={`data:image/png;base64,${product.img.data}`} /> */}
            <div className={feedcss.naming}>abcd</div>
            <div className={feedcss.post}></div>
            </div>
          </div>  
        </div>
    </div>
  )
}
