import React from 'react'
import Heading from '../../../heading/heading'
import FeatureBox from '../../../feature-box/feature-box'
import styles from './values.module.scss'
import layout from './layout.module.scss'

export default () => {
  return (
    <div>
      <Heading text={'Core Values'}>
        <p>Your whole person is involved, your:</p>
      </Heading>

      <div className={styles.featureContainer}>
        <FeatureBox header={'Body'} body={'We can achieve extraordinary results, when we use physical well-being as the framework for achieving greatness in life.'}/>
        <FeatureBox header={'Mind'} body={'Understanding how our brain works is key to improvement.'}/>
        <FeatureBox header={'Spirit'} body={'Aligning with your own personal world-view and faith is essential.'}/>
      </div>

      <p className={layout.bottomText}>As you work through all areas of your life and align them with you core values you will produce several spin-offs including stress reduction, improved relationships, weight loss, improved levels of fitness and more.</p>
    </div>
  )
}