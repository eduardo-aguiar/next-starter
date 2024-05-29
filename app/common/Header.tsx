import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    href: "/",
    text: "Page1",
  },
  {
    href: "/questions",
    text: "Questions",
  },
  {
    href: "/questions",
    text: "Questions",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between shadow-md p-3">
      <Image
        className="flex-none rounded-md mx-1"
        alt="logo"
        src="edu.svg"
        width={50}
        height={50}
      />
      <nav className="flex gap-3 items-center mx-3">
        {links.map((link, index) => (
          <Link
            className="font-semibold text-zinc-400 text-lg"
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
