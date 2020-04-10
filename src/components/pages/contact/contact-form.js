import React, { useState } from 'react'
import styles from './contact-form.module.scss'
import emailjs from 'emailjs-com';

export default () => {

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitText, setSubmitText] = useState('SEND MESSAGE')
  const [disabled, setDisabled] = useState(false)

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'charlesdalton_dk_contact', e.target, process.env.GATSBY_EMAILJS_USER_ID)
      .then((result) => {
        setDisabled(true)
        setSubmitText('THANK YOU')
      }, (error) => {
        setSubmitText('Error: Please try again later')
      })
  }

  return (
    <div>
      <div className={styles.formHeader}>
        <p><b>Contact me</b></p>
      </div>
      <form className={styles.form} onSubmit={sendEmail}>
        <div className={styles.inputs}>  
          <input 
            type="email" 
            name="email" 
            value={email}
            placeholder="Email"
            onChange={(e) => {setEmail(e.target.value)}}
            disabled={disabled}
          />
  
          <input 
            type="text" 
            name="phone" 
            value={phone}
            placeholder="Phone number"
            onChange={(e) => {setPhone(e.target.value)}}
            disabled={disabled}
          />
        </div>
        
        <div className={styles.textarea}>
          <textarea 
            type="text" 
            rows="3" 
            cols="50" 
            name="message" 
            value={message}
            placeholder="Write a message..."
            onChange={(e) => {setMessage(e.target.value)}}
            disabled={disabled}
          >
          </textarea>
  
        </div>
  
        <div className={styles.submit}>
          <button type="submit">{submitText}</button>
        </div>
      </form>
    </div>
  )
}