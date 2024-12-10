import React, { PropsWithChildren } from 'react'
import Image from 'next/image'
type Props = PropsWithChildren<{
    src:string,
    alt:string,
    Height:number,
    Width:number,
    className?:string
}>

const CommonImageWrapper = ({src,alt,Height,Width,className}: Props) => {
  return (
    <Image 
                src={src}
                alt={alt}
                height={`${Height}`}
                width={`${Width}`}
                className={className}
            />
  )
}

export default CommonImageWrapper