import React from 'react'
import Heading from '../../../heading/heading'
import { BulletList, BulletItem } from '../../../bullet-list/bullet-list'

export default () => {
  return (
    <div>
      <Heading text={'Core Purpose'}>
        <p>Your personal skills and competencies – now or in the future.</p>
      </Heading>
      <BulletList >
        <BulletItem>
          <p>Commitment –you are sold out on the idea.</p>
        </BulletItem>
        <BulletItem>
          <p>Optimism – you believe change is possible in all situations.</p>
        </BulletItem>
        <BulletItem>
          <p>Endurance and resilience – when the going gets tough.</p>
        </BulletItem>
        <BulletItem>
          <p>Personal ownership – of all spheres of your life.</p>
        </BulletItem>
        <BulletItem>
          <p>Authenticity – you walk the talk despite temptation to compromise.</p>
        </BulletItem>
        <BulletItem>
          <p>Clarity – in you thinking and communication, this sets you free!</p>
        </BulletItem>
        <BulletItem>
          <p>Collaboration – you are never an island.</p>
        </BulletItem>
        <BulletItem>
          <p>Empathy – understanding those you team up with.</p>
        </BulletItem>
        <BulletItem>
          <p>Respect – for others, whoever they are.</p>
        </BulletItem>
        <BulletItem>
          <p>Self-leadership – practice it and empower others to do the same.</p>
        </BulletItem>
      </BulletList>
    </div>
  )
}