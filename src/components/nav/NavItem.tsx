import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
   endPoint:string,
}>

const NavItem = ({endPoint,children}: Props) => {
  return (
    <li className='p-2 text-xl'>
      <Link href={endPoint}>{children}</Link>
    </li>
  )
}

export default NavItem