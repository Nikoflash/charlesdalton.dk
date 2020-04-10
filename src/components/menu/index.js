import React from 'react'
import styles from './menu.module.scss'
import { Link } from 'gatsby'
 
export default ({page}) => {
  if (page === 'index') {
    return (
      <div className={styles.menu}>
        <div className={styles.menuIndex}>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }

  if (page === 'contact') {
    return (
      <div className={styles.menu}>
        <div className={styles.menuContact}>
          <Link to="/">Home</Link>
        </div>
      </div>
    )
  } 
}