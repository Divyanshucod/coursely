import React, { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import Image from "next/image";


const SearchBar = () => {
  return (
    <div className="w-full md:w-[35%] flex items-center relative">
      <input
        type="text"
        placeholder="Search Your Favourite Course"
        className="w-full bg-zinc-200 border truncate border-slate-500 rounded-l-full rounded-r-full py-3 px-2"
      />
      <Button
        variant="ghost"
        className="rounded-full absolute top-1/2 right-2 transform -translate-y-1/2 hover:bg-slate-100"
      >
        <Image
          src="/search-solid.svg"
          alt="Search Icon"
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
};

export default SearchBar;
