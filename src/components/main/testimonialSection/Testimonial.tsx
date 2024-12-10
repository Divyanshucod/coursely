import Image from 'next/image'
import React from 'react'

type Props = {}

function Testimonial({}: Props) {
  return (
    <div className="w-1/3">
    <div className="relative">
        <div
            className="flex justify-center items-center h-64 bg-gradient-to-r rounded-lg overflow-hidden border-2">
            <div className="px-8 text-black">
                <p className="text-lg font-medium text-black mb-2">"The best experience ever"</p>
                <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor nisi eget
                    ornare ultrices. Proin laoreet ultrices nunc vel dapibus.</p>
                <div className="mt-4 flex items-center">
                    <Image className="h-10 w-10 rounded-full mr-4" src="/volkswagen_logo.svg" alt="Avatar of person" height='50' width='50'/>
                    <div>
                        <p className="text-black font-medium">Mary Johnson</p>
                        <p className="text-gray-800">CEO, Acme Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonial