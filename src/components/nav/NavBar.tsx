import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import NavItem from './NavItem'
import Category from './Category'
import SearchBar from './SearchBar'
import Image from 'next/image'
import Button from './Button'

type Props = PropsWithChildren<{}>

const NavBar = (props: Props) => {
  return (
    <div className='w-screen h-30 border border-slate-600 p-5'>
        <div className='w-full flex justify-between items-center'>
            <Link href='/'> <Image src='/coursely-logo.png' alt='logo' width='200' height='100' className=''/></Link>
        <Category/>
        <SearchBar/>
        <ul className='flex justify-between items-center gap-3'>
          <NavItem endPoint='/pricing'>Plan & Price</NavItem>
          <NavItem endPoint='/teach'>Teach on coursely</NavItem>
        </ul>
        <Button variant='primary' size='icon' color='blue'>Login</Button>
        <Button variant='primary' size='icon' color='text-slate-200'>Signup</Button>
        </div>
    </div>
  )
}

export default NavBar