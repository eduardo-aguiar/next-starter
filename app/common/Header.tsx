"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/study",
    text: "Study",
  },
  {
    href: "/questions",
    text: "Questions",
  },
];

export default function Header() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <header className="flex justify-between px-5 py-3 shadow">
      <Image
        className="mx-1 flex-none rounded-md"
        alt="logo"
        src="edu.svg"
        width={50}
        height={50}
      />
      <nav className="mx-3 flex items-center gap-6">
        {links.map((link, index) => (
          <Link
            className={`text-lg font-semibold ${pathname === link.href ? "text-zinc-800" : "text-zinc-400"}`}
            key={index + 10}
            href={link.href}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
}
