"use client"
import React, { PropsWithChildren, useEffect } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type Props = PropsWithChildren<{}>

// Define the structure of your images array
const Images = [{src:"/quote-image.jpg", para:'Lorem ipsum dolor sit amet.', heading:'Sample Heading', buttonText:'Learn More'}]

const ImageSlider = (props: Props) => {
    const [imageIndex, setImageIndex] = React.useState<number>(0)

    // Effect hook (currently empty, you can add logic if needed)
    useEffect(()=>{
    }, [imageIndex])

  return (
    <div className="h-[100%] relative">
        {/* Image container */}
        <div className="relative w-full h-full">
            <Image 
                src={Images[imageIndex].src} 
                alt="Image" 
                layout="fill" 
                objectFit="cover" 
                className="absolute inset-0 w-full h-full" 
            />
            {/* Content overlay if heading is available */}
            {Images[imageIndex].heading.length !== 0 && (
                <div className="absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-50 p-4">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">{Images[imageIndex].heading}</h3>
                        <p className="mb-4">{Images[imageIndex].para}</p>
                        {Images[imageIndex].buttonText && <Button>{Images[imageIndex].buttonText}</Button>}
                    </div>
                </div>
            )}
        </div>

        {/* Left and Right Arrow Buttons */}
        <Button 
            variant="ghost" 
            className="rounded-full absolute top-1/2 left-2 transform -translate-y-1/2 hover:bg-slate-100" 
            onClick={() => setImageIndex(imageIndex - 1 < 0 ? Images.length - 1 : imageIndex - 1)}
        >
            {'<'}
        </Button>
        <Button 
            variant="ghost" 
            className="rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 hover:bg-slate-100" 
            onClick={() => setImageIndex(imageIndex + 1 >= Images.length ? 0 : imageIndex + 1)}
        >
            {'>'}
        </Button>
    </div>
  )
}

export default ImageSlider
