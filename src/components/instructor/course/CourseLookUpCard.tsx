import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    image:string,
    title:string,
    description:string
}>


export function CourseLookUpCard({ image, title, description }:Props) {
    return (
      <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
        <img src={image} alt="Image" className="w-1/3 h-auto object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-lg">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }