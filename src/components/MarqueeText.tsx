import React from 'react'
import ScrollBaseAnimation from './ui/text-marquee'

type Props = {}

const MarqueeText = (props: Props) => {
  return (
    <>
      <div className='h-[100px] grid place-content-center text-white'>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          {/* PESU's Rizz Card */}
          Text Here
        </ScrollBaseAnimation>
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={3}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          Share it if you like it
        </ScrollBaseAnimation>
      </div>
    </>
  )
}

export default MarqueeText