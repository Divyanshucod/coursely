import { User } from "lucide-react";
import Image from "next/image";

// components/TopNav.js
export function TopNav() {
    return (
      <div className="bg-gray-50 text-gray-800 p-4 flex w-full justify-end">
        <div className="flex items-center gap-10 ">
          <button className="hover:text-gray-400">Student</button>
          <button className="">
            <Image src='/bell-regular.svg' alt="notification" height={20} width={20}/>
          </button>
          <User/>
        </div>
      </div>
    );
  }
  