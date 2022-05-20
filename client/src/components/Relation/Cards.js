import React from 'react'
import Relationcss from './Card.module.css';

export default function Cards() {
  return (
    <div className={Relationcss.out}>  
    <div className={Relationcss.whole}>
        <p className={Relationcss.heading}>
            My Relations
        </p>
        <div className={Relationcss.outer}>
            <div className={Relationcss.card}>
                <p className={Relationcss.name}>abcd</p>
                <p className={Relationcss.relation}>efghi</p>
            </div>
            <div className={Relationcss.card}>
                <p className={Relationcss.name}>abcd</p>
                <p className={Relationcss.relation}>efghi</p>
            </div>
            <div className={Relationcss.card}>
                <p className={Relationcss.name}>abcd</p>
                <p className={Relationcss.relation}>efghi</p>
            </div>
        </div>
    </div>
    </div>
  )
}
