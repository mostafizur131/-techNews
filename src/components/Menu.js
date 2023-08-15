import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <header className="p-4 bg-gray-800 text-gray-100">
      <div className="container flex justify-between h-10 mx-auto">
        <Link
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 text-2xl font-bold"
        >
          Tech News
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link href="/" className="flex items-center px-4 -mb-1 ">
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              href="/blog"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
