import React from 'react'
import ImageSlider from './ImageSlider'

type Props = {}

const ImageSection = (props: Props) => {
  return (
    <div className='h-96 w-full flex justify-center'>
      <ImageSlider/>
    </div>
  )
}

export default ImageSection