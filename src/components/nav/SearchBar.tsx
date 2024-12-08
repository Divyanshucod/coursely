import React, { PropsWithChildren } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type Props = PropsWithChildren<{}>

function SearchBar({}: Props) {
  return (
    <div className='w-[35%] flex items-center relative'>
       <input type='text' placeholder='Search Your Faviourite Course' className='w-[100%] h-[100%] bg-zinc-200 border truncate border-slate-500 rounded-l-full rounded-r-full py-4 px-2 '/>
       <Button variant='ghost' className='rounded-full absolute top-1/2 right-[2px] transform -translate-y-1/2 hover:bg-slate-100'><Image src='/search-solid.svg' alt='search logo' width='25' height='25'/></Button>
    </div>
  )
}

export default SearchBar