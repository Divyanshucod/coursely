import Partner from '@/components/main/partnerSection/Partner'
import PricingCard from '@/components/main/SubscriptionSection/PricingCard'
import Testimonial from '@/components/main/testimonialSection/Testimonial'
import React from 'react'

type Props = {}

const Pricing = (props: Props) => {
  return (
    <div className='w-full mt-5'>
      <h2 className='font-extrabold text-6xl text-zinc-800 text-center'>Choose a plan for success</h2>
      <p className='text-xl text-zinc-800 text-center'>Don't want to buy courses one by one? Pick a plan to help you, your team, or your organization achieve outcomes faster.</p>
      <div className='w-full items-center justify-between px-20 py-10'>
        <PricingCard/>
      </div>
      <div className='w-full items-center px-20 py-10'>
        <Partner/>
      </div>
      <div className='w-full items-center px-20 py-10'>
        <Testimonial/>
      </div>
    </div>
  )
}

export default Pricing