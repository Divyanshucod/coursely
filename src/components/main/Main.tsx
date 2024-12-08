import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import ImageSlider from './ImageSlider'

type Props = {}

const Main = (props: Props) => {
  return (
    <div className='h-60 w-[100%] flex justify-center'>
      <ImageSlider/>
    </div>
  )
}

export default Main