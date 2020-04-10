import React from 'react'
import styles from './feature.module.scss'

export default ({header, body}) => {
  return (
    <div className={styles.box}>
      <div className={styles.boxHeader}>
        {header}
      </div>
      <div className={styles.boxBody}>
        {body}
      </div>
    </div>
  )
}