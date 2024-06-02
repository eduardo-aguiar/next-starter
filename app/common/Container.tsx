import React from "react";

export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white max-w-[1400px] mx-auto min-h-screen flex flex-col shadow-sm">
      {children}
    </div>
  );
}
