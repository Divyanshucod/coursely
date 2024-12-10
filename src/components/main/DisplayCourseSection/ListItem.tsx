import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{}>

const ListItem = ({children}: Props) => {
  return (
    <li className='text-gray-800 hover:text-black hover:border-b-2 hover:border-black cursor-pointer'>
        {children}
    </li>
  )
}

export default ListItem