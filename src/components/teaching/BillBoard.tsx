import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

type Props = {}

const BillBoard = (props: Props) => {
  return (
    <div className='w-full h-4/5 relative'>
      <Image 
                src='/billboardHD.jpeg'
                alt="Image" 
                height='1000'
                width='1000'
                className='h-full w-full object-fit'
            />
        <div className='absolute top-1/2 transform -translate-y-1/2 left-[30px] p-5 w-[25%] flex flex-col gap-3'>
          <p className='text-6xl font-extrabold text-zinc-800'>Come teach with us</p>
          <p className='text-2xl text-zinc-800'>Become an instructor and change lives — including your own</p>
          <Button variant='default' className='w-full leading-relaxed' size='lg'>Get Started</Button>
        </div>
    </div>
  )
}

export default BillBoard