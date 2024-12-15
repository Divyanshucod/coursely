import Link from "next/link";
import React, { PropsWithChildren } from "react";
import NavItem from "./NavItem";
import Category from "./Category";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { Button } from "../ui/button";
import ColorfulBorder from "../shared/UI/ColorFulBorder";

type Props = PropsWithChildren<{}>;

const NavBar = (props: Props) => {
  return (
    <div className="w-full h-20 p-2 flex items-center bg-zinc-100 shadow-lg">
    <div className="w-full flex justify-between items-center">
      <Link href="/" className="w-40">
        {" "}
        <Image src="/coursely-logo.png" alt="logo" width="200" height="100" />
      </Link>
      <Category />
      <SearchBar />
      <ul className="flex justify-between items-center gap-4">
        <NavItem endPoint="/pricing">Plan & Price</NavItem>
        <NavItem endPoint="/teaching">Teach on coursely</NavItem>
      </ul>
      <div className="flex items-center gap-6">
        <ColorfulBorder>
          <Button variant="ghost" className="rounded-full hover:bg-slate-100">
            <Image
              src="/Shopcart.svg"
              alt="search logo"
              width="25"
              height="25"
            />
          </Button>
        </ColorfulBorder>
        <ColorfulBorder color="orange">
          <Link
            className="px-2 py-1 bg-zinc-100"
            href='/login'
          >
            Login
          </Link>
        </ColorfulBorder>
        <ColorfulBorder>
          <Link href='/signup' className="px-2 py-1 bg-slate-900 text-white">Signup</Link>
        </ColorfulBorder>
      </div>
    </div>
  </div>
  
  );
};

export default NavBar;
