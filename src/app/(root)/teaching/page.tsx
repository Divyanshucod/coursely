import BillBoard from '@/components/teaching/BillBoard'
import BillBoard2 from '@/components/teaching/BillBoard2'
import InspirationPage from '@/components/teaching/InspirationPage'
import React from 'react'


type Props = {}

function Teaching({}: Props) {
  return (<div className='w-full flex flex-col gap-20'>
   <BillBoard/>
   <InspirationPage/>
   <BillBoard2/>
   </div>
  )
}

export default Teaching