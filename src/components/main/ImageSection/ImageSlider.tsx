"use client"
import React, { PropsWithChildren, useEffect } from 'react'
import { Button } from '../../ui/button'
import Image from 'next/image'

type Props = PropsWithChildren<{}>

// Define the structure of your images array
const Images = [{src:"/quote-image.jpg", para:'Learn valuable, practical skills for as low as ₹549. Sale ends tonight!', heading:'24-Hour Flash Sale', buttonText:'Learn More'}]

const ImageSlider = (props: Props) => {
    const [imageIndex, setImageIndex] = React.useState<number>(0)

    // Effect hook (currently empty, you can add logic if needed)
    useEffect(()=>{
    }, [imageIndex])

  return (
    <div className="h-[100%] relative w-[100%]">
        {/* Image container */}
        <div className="relative w-full h-full">
            <Image 
                src={Images[imageIndex].src} 
                alt="Image" 
                height='700'
                width='700'
                className='h-full w-full object-fit'
            />
            {/* Content overlay if heading is available */}
            {Images[imageIndex].heading.length !== 0 && (
                <div className="absolute top-1/2 left-[20px] transform -translate-y-1/2 flex items-center justify-center text-black bg-gray-50 p-4 w-1/3 shadow shadow-sm shadow-lg">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{Images[imageIndex].heading}</h3>
                        <p className="mb-4">{Images[imageIndex].para}</p>
                        {Images[imageIndex].buttonText && <Button>{Images[imageIndex].buttonText}</Button>}
                    </div>
                </div>
            )}
        </div>

        {/* Left and Right Arrow Buttons */}
        <Button 
            variant="default" 
            className="rounded-full absolute top-1/2 left-2 transform -translate-y-1/2 hover:bg-slate-800 bg-slate-900 text-white" 
            onClick={() => setImageIndex(imageIndex - 1 < 0 ? Images.length - 1 : imageIndex - 1)}
        >
            {'<'}
        </Button>
        <Button 
            variant="default" 
            className="rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 hover:bg-slate-800 bg-slate-900 text-white" 
            onClick={() => setImageIndex(imageIndex + 1 >= Images.length ? 0 : imageIndex + 1)}
        >
            {'>'}
        </Button>
    </div>
  )
}

export default ImageSlider
