import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  done: boolean;
};
export const BlackOverlay: React.FC<Props> = ({ children, done }) => {
  return (
    <div
      className={`w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0C0C0C] transition-[z-index] z-10 transition-opacity duration-[2s] ${
        done ? "opacity-0 z-[-1]" : "opacity-100"
      }`}
    >
      {children}
    </div>
  );
};