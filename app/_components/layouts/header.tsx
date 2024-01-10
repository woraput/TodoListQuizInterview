"use client";

import { usePathname } from "next/navigation";
import { Navigator } from "@/_constants/navigator";
import Link from "next/link";
import React from "react";
import { cx } from "@emotion/css";

const router = [
  {
    name: "Home",
    path: Navigator.HOME,
  },
  {
    name: "Todo",
    path: Navigator.TODO,
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="p-layout-tablet xl:p-layout-desktop flex w-full items-center  gap-5 rounded-lg border-b xl:gap-10">
      <Link
        className="rounded-md border-2 border-solid border-gray-400 bg-gray-100 p-1 text-xs font-extrabold md:text-lg xl:p-2"
        href={Navigator.HOME}
      >
        Todo Toyou
      </Link>
      <ul className="inline-flex list-none gap-2 xl:gap-4">
        {router.map((page, index) => (
          <li key={index}>
            <Link
              className={cx(
                "text-xs md:text-base",
                pathname === page.path && "font-bold",
              )}
              href={page.path}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
