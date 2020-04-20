import React from 'react'
import styles from './purval.module.scss'
import ValuesIcon from '../../../../assets/icons/values'
import PurposeIcon from '../../../../assets/icons/purpose'

export default () => {
  return (
    <div className={styles.purval}>
      <div id="values" className={styles.values}>
        <div className={styles.iconValues}>
          <ValuesIcon />
        </div>
        <div className={styles.text}>
          <h3 className={styles.headerGreen}>Core Values</h3>
          <p>The principles that you consider to be most important, and which affect all aspects of what you do. When you authentically live by them you are at peace with yourself and your world.</p>
        </div>
      </div>
      <div id="purpose" className={styles.purpose}>
        <div className={styles.text}>
          <h3 className={styles.headerGreen}>Core Purpose</h3>
          <p>This is the reason why you exist, your mission, your calling or your true north. It is idealistic, it is something that you aspire to.</p>
        </div>
        <div className={styles.iconPurpose}>
          <PurposeIcon />
        </div>
      </div>
    </div>
  )
}