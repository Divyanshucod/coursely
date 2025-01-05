import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  title:string,
  srcIcon:string,
  alt:string,
  srcLink:string
}>

function MenuItem({title,srcIcon,alt,srcLink}: Props) {
  return (
    <>
    <div className="overflow-hidden w-full flex gap-5 items-center">
            <Image src={srcIcon} alt={alt} height={40} width={40} className='object-fit filter invert'/>
            <Link href={srcLink} className="text-white font-semibold text-xl ml-5">{title}</Link>
      </div>
    </>
  )
}

export default MenuItem