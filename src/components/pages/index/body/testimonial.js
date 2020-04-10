import React from 'react'
import styles from './testimonial.module.scss'

export default () => {
  return (
    <div className={styles.testimonial}>
      <p className={styles.text}><i>“My coaching course with Charles completely changed the way I work. Through our conversations I was able to explore what it was I actually wanted out of my career and at the end of our time together I had completely changed how I approached my business.”</i></p>

      <p className={styles.name}><b>Christina Andersen</b></p>
      <p className={styles.link}><a href="https://www.absolutehealth.net/" target="_blank" rel="noopener noreferrer">Absolute Health</a></p>
    </div>
  )
}