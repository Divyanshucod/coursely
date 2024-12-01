import React, { PropsWithChildren } from 'react'
import Button from './Button'

type Props = PropsWithChildren<{}>

function SearchBar({}: Props) {
  return (
    <div className='w-[20%] '>
       <input type='text' placeholder='Search Your Faviourite Course'/>
       <Button>hello</Button>
    </div>
  )
}

export default SearchBar