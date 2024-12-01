import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{}>

const Category = (props: Props) => {
  return (
    <div className='text-xl'>Category</div>
  )
}

export default Category