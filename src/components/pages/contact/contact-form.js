import React, { useState } from 'react'
import styles from './contact-form.module.scss'
import emailjs from 'emailjs-com';

export default () => {

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

   console.log(e.target)

    emailjs.sendForm('default_service', 'charlesdalton_dk_contact', e.target, 'user_guT7ot8VVgYHwGmiskkco')
      .then((result) => {
          console.log('This is the result ' + result.text);
      }, (error) => {
          console.log('This is the error '+ error.text);
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
          />
  
          <input 
            type="text" 
            name="phone" 
            value={phone}
            placeholder="Phone number"
            onChange={(e) => {setPhone(e.target.value)}}
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
          >
          </textarea>
  
        </div>
  
        <div className={styles.submit}>
          <button type="submit">SEND MESSAGE</button>
        </div>
      </form>
    </div>
  )
}