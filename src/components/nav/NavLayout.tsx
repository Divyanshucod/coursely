"use client"
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import NavBar from './NavBar'
import SideNav from '../instructor/course/SideNav'
type Props = PropsWithChildren<{}>

function NavLayout({}: Props) {
    const router =usePathname()
    const instructorPath = router.startsWith('/instructor');
  return (<>
    {instructorPath ? <SideNav/> : <NavBar/>}
    </>
  )

}

export default NavLayout