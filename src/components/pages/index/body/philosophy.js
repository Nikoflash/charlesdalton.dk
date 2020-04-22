import React from 'react'
import { BulletList, BulletItem } from '../../../bullet-list/bullet-list'
import Heading from '../../../heading/heading'
import layout from './layout.module.scss'

export default () => {
  return (
    <div>
      <Heading text={'Coaching Philosophy'}/>
      <div>
        <p>My coaching philosophy is based on honouring each person as having personal, significant worth and as an expert in their own life and work.</p>
        <p>I believe that you are naturally creative, resourceful and whole and it is my job to:</p>
      </div>
      <BulletList>
        <BulletItem>
          <p>Help you uncover your <a href="#purpose">Core Purpose</a></p>
        </BulletItem>
        <BulletItem>
          <p>Help you define your <a href="#values">Core Values</a> and authentically live by them</p>
        </BulletItem>
        <BulletItem>
          <p>Discover, clarify and align with what you want to achieve</p>
        </BulletItem>
        <BulletItem>
          <p>Elicit personally generated solutions and strategies</p>
        </BulletItem>
        <BulletItem>
          <p>Facilitate finding truth when you are in the dark – this will set you free!</p>
        </BulletItem>
        <BulletItem>
          <p>Hold you responsible</p>
        </BulletItem>
      </BulletList>

      <p className={layout.bottomText}>This is accomplished by listening and asking simple questions that open your horizon.</p>
    </div>
  )
}