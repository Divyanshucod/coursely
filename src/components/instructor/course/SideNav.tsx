"use client"
import { useState } from "react";


export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-16'} h-full transition-all absolute`}
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)}>
      <div className="flex flex-col p-4 space-y-4">
        {/* <MenuIcon className="w-8 h-8" /> */}
        {isOpen && (
          <div className="space-y-2">
            <a href="#" className="block hover:text-gray-400">Courses</a>
            <a href="#" className="block hover:text-gray-400">Performance</a>
            <a href="#" className="block hover:text-gray-400">Tools</a>
            <a href="#" className="block hover:text-gray-400">Resources</a>
          </div>
        )}
      </div>
    </div>
  );
}
