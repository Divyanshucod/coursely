import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
    no:string,
    text:string
}>

const InspirationNo = ({no,text}: Props) => {
  return (
    <div className='flex w-30 flex-col items-center'>
        <span className='text-3xl text-zinc-50'>{no}</span>
        <p className='text-zinc-50 text-xl'>{text}</p>
    </div>
  )
}

export default InspirationNo