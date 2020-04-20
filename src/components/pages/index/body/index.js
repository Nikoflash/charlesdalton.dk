import React from 'react'
import layout from './layout.module.scss'
import Philosophy from './philosophy'
import Values from './values'
import Purpose from './purpose'
import Testimonial from './testimonial'
import PurVal from './purval'

export default () => {
  return (
    <div className={layout.body}>
      <div className={layout.blockWhite}>
        <div className={layout.container}>
          <Philosophy />
        </div>
      </div>
      <div className={layout.blockGrey}>
        <div className={layout.container}>
          <Values />
        </div>
      </div>
      <div className={layout.blockWhite}>
        <div className={layout.container}>
          <Purpose />
        </div>
      </div>
      <div className={layout.blockGrey}>
        <div className={layout.container}>
          <PurVal />
        </div>
      </div>
      <div className={layout.blockWhite}>
        <div className={layout.container}>
          <Testimonial />
        </div>
      </div>
    </div>
  )
}