import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { User } from 'lucide-react'
import React from 'react'

type Props = {}

const PricingCard = (props: Props) => {
  return (
     <Card className='p-5 border-t-8 border-blue-600 pb-20 w-96 flex flex-col gap-4'>
         <div>
         <h2 className='text-[25px] font-bold'>Personal Plan</h2>
        <span className='text-sm text-gray-800'>For You</span>
        <div className='flex gap-2'>
            <User/>
            <span className='text-gray-500'>Individual</span>
        </div>
         </div>
        <div className='flex flex-col gap-2'>
            <div>
              <p className='font-bold text-[20px]'>Starting at ₹850 per month</p>
              <p className='text-sm'>Billed monthly or annually. Cancel anytime.</p>
            </div>
            <Button variant='default' className='w-full'>Start Subscription &#x2192;</Button>
        </div>
        <ul>
            <li>Access to 12,000+ top courses</li>
            <li>Certification prep</li>
            <li>Goal-focused recommendations</li>
            <li>AI-powered coding exercises</li>
        </ul>
     </Card>
  )
}

export default PricingCard