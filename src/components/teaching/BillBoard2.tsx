import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

type Props = {}

function BillBoard2({}: Props) {
  return (
    <div className='flex justify-between w-full items-center h-2/3 my-10'>
        <div>
        <Image src='/billBoard2image1.webp' alt='billboard2image1' height='600' width='900'/>
        </div>
        <div className='flex justify-center items-center flex-col w-1/2 text-center gap-3'>
            <p className='text-4xl font-extrabold'>You won’t have to do it alone</p>
            <p className='text-normal'>Our <b>Instructor Support Team</b> is here to answer your questions and review your test video, while our <b>Teaching Center </b> gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our <b>online community</b>.</p>
            <span></span>
            <Link href='#' className='text-sm'>Need more details before you start? Learn more</Link>
            <Button variant='default'>Get Started</Button>
        </div>
        <div>
            <Image src='/billBoard2image2.webp' alt='billboard2image1' height='600' width='900'/>
        </div>
    </div>
  )
}

export default BillBoard2