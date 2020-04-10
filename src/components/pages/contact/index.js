import React from 'react'
import styles from './index.module.scss'
import ContactForm from './contact-form'
import contactImg from '../../../assets/images/charles-dalton-smile.png'
import Footer from '../../footer/footer'

export default () => {
  return (
    <div>
      <div className={styles.contact}>
        <ContactForm />
        <img src={contactImg} alt="Charles Dalton smiling"/>
      </div>
      <Footer />
    </div>
  )
}