import React, { PropsWithChildren } from "react";
import "./ColorfulBorder.css"; // Include additional styles for animation

type props = PropsWithChildren<{
  className?: string;
  color?: string; // New prop to accept custom border color
}>;

const ColorfulBorder = ({ children, className, color = '#0ea5e9' }: props) => {
  return (
    <div className="mx-auto flex w-full max-w-lg items-center justify-center">
      <div
        className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]"
      >
        {/* Apply the dynamic color to the border animation */}
        <div
          className="animate-rotate absolute inset-0 h-full w-full rounded-full"
          style={{
            background: `conic-gradient(${color} 20deg, transparent 120deg)`, // Custom color here
          }}
        ></div>
        <div className="relative z-20 flex rounded-[0.60rem]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ColorfulBorder;

