import React, { PropsWithChildren } from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
type Props = PropsWithChildren<{
    teacher:string,
    rating:number,
    pricing:number
}>

const CourseCard = ({teacher,rating,pricing,children}: Props) => {
  return (
    <Card className="w-80 h-full cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl rounded-lg">
  <Image
    src="/quote-image.jpg"
    alt="course image"
    width="400"
    height="200"
    className="w-full h-48 object-cover rounded-t-lg"
  />
  <div className="px-5 py-4 flex flex-col justify-between h-full">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">
      {children}
    </h2>
    <p className="text-gray-500 text-sm truncate">
      {teacher}
    </p>
    <div className="mt-4 flex flex-col gap-1">
      <p className="text-yellow-500 font-semibold">{rating}</p>
      <p className="text-lg font-bold text-green-500">{pricing}</p>
    </div>
  </div>
</Card>

  )
}

export default CourseCard