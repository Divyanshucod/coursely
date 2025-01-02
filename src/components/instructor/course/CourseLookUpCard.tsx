import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
    image:string,
    title:string,
    description:string
}>


export function CourseLookUpCard({ image, title, description }:Props) {
    return (
      <div className="flex bg-white shadow-[3px_4px_6px_rgba(0,0,0,0.5)] rounded-lg h-72 justify-around gap-5 p-10 w-full">
        <div className="h-[90%] w-[18%]">
        <Image src={image} alt="Image" className="object-fit h-full w-full" height={100} width={100}/>
        </div>
        <div className="p-10 flex flex-col gap-5 w-[70%]"> 
          <h2 className="font-medium text-2xl text-slate-800">{title}</h2>
          <p className="font-medium text-slate-800">{description}</p>

          <Link href="#" className="text text-blue-900">Get Started</Link>
        </div>
      </div>
    );
  }