import BillBoard from '@/components/pricing/BillBoard'
import InspirationPage from '@/components/pricing/InspirationPage'
import React from 'react'


type Props = {}

function Pricing({}: Props) {
  return (<div className='w-full flex flex-col gap-20'>
   <BillBoard/>
   <InspirationPage/>
   </div>
  )
}

export default Pricing