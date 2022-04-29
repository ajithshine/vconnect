import React from 'react'
import feedcss from './Feed.module.css';
export default function Feed() {
  return (
    <div>
        <div className={feedcss.outer}>
            <div className={feedcss.header}>
                <img src={`data:image/png;base64,${product.img.data}`} />

            </div>
        </div>
    </div>
  )
}
