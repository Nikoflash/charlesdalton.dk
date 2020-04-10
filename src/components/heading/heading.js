import React from 'react'
import ArrowDown from '../../assets/icons/arrow-down'
import styles from './heading.module.scss'

export default ({text, children}) => {
  return (
    <div className={styles.header}>
      <h2>{text}</h2>

      <ArrowDown />

      {children}
    </div>
  )
}
