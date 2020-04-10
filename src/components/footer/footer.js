import React from 'react'
import styles from './footer.module.scss'
import Email from '../../assets/icons/email'
import Linkedin from '../../assets/icons/linkedin'

export default () => {
  return (
    <div className={styles.footer}>
      <div className={styles.email}>
        <a href="mailto:charlesdalton@gmail.com">
          <Email /> 
        </a>
        <p>charlesdalton@gmail.com</p>
      </div>
      <div className={styles.linkedin}>
        <a href="https://www.linkedin.com/in/charles-dalton-645722a/" rel="noopener noreferrer" target="_blank">
          <Linkedin />
        </a>
      </div>
    </div>
  )
}