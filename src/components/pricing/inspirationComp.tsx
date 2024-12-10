import Image from "next/image";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  src: string;
  title: string;
  para: string;
}>;

const InspirationComp = ({ src, title, para }: Props) => {
  return (
    <div className="text-center w-60  flex justify-center items-center flex-col">
      <Image src={src} alt="inspirationImage" height="100" width="100" />
      <div>
        <p className="text-xl font-bold text-zinc-800">{title}</p>
        <span className="text-zinc-700 font-semibold">{para}</span>
      </div>
    </div>
  );
};

export default InspirationComp;
