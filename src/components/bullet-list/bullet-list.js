import React from 'react'
import styles from './bulletList.module.scss'
import Bullet from '../../assets/icons/bullet'

export const BulletList = ({children}) => {
  return (
    <div className={styles.bulletList}>
      {children}
    </div>
  )
}

export const BulletItem = ({children}) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.bulletSvg}>
        <Bullet />
      </div>
      <div className={styles.bulletText}>
        {children}
      </div>
    </div>
  )
}
