import React from 'react'
import styles from './header.module.scss'
import coverImg from '../../../../assets/images/charles-dalton.jpg'

export default () => {
  return (
    <div className={styles.header}>
      <div className={styles.imgCover}>
        <img src={coverImg} alt="Performance Coach Charles Dalton"/>
      </div>
      <div className={styles.title}>
        <div className={styles.titleText}>
          <h1>Performance Coach</h1>
          <h2>Charles Dalton</h2>

          <div className={styles.titleOneLiner}>
            <h4><i>“Helping leaders build trust through authenticity”</i></h4>
          </div>
        </div>
      </div>
    </div>
  )
}