"use client"

import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  active?:boolean,
}>

const ClickAbleIcon = ({children,active}: Props) => {
   const [Active,setActive] = React.useState<boolean>(false)
  return (
    <div className={`rounded-full ${Active ? "bg-slate-900 text-zinc-50" : "bg-zinc-200 text-slate-950"} p-5 cursor-pointer`} onClick={()=> setActive(!Active)}>
      {children}
    </div>
  )
}

export default ClickAbleIcon