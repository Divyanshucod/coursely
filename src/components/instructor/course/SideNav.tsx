"use client"
import MenuItem from "@/components/nav/MenuItem";
import { usePathname } from "next/navigation";

import { useState } from "react";


export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  return (
    <div className={`bg-zinc-900 text-white ${isOpen ? 'w-72' : 'w-20'} h-[80%] transition-all absolute`}
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}>
      <div className="flex flex-col p-4 gap-7">
            <div className={`border-l-4 border-teal-500 ${pathname == '/instructor/course' ? 'border-solid' : 'border-none'} pl-1`}>
            <MenuItem title="Courses" srcIcon="/book-open-reader-solid.svg" alt="open-book-logo" srcLink="#"/>
            </div>
            <div className={`border-l-4 border-teal-500 ${pathname == '/instructor/communicate' ? 'border-solid' : 'border-none'} pl-1`}>
            <MenuItem title="Communication" srcIcon="/comment-regular.svg" alt="comment-regular" srcLink="#"/>
            </div>
            <div className={`border-l-4 border-teal-500 ${pathname == '/instructor/performance' ? 'border-solid' : 'border-none'} pl-1`}>
            <MenuItem title="Performance" srcIcon="/chart-line-solid.svg" alt="chart-line" srcLink="#"/>
            </div>
            <div className={`border-l-4 border-teal-500 ${pathname == '/instructor/tools' ? 'border-solid' : 'border-none'} pl-1`}>
            <MenuItem title="Tools" srcIcon="/wrench-solid.svg" alt="tools" srcLink="#"/>
            </div>
            <div className={`border-l-4 border-teal-500 ${pathname == '/instructor/resources' ? 'border-solid' : 'border-none'} pl-1`}>
            <MenuItem title="Resources" srcIcon="/circle-question-regular.svg" alt="comment-regular" srcLink="#"/>
            </div>
      </div>
    </div>
  );
}

