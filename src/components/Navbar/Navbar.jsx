import React, { useEffect, useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Product Details", path: "/products/:id" },
  ];
  useEffect;
  return (
    <nav className="bg-purple-400">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === false ? (
            <Bars3Icon className="h-10 w-10 text-black-500" />
          ) : (
            <XMarkIcon className="h-10 w-10 text-black-500"></XMarkIcon>
          )}
        </span>
      </div>
      <ul
        className={`md:flex absolute md:static duration-500 ${
          open ? "left-0 top-5 w-96 h-full" : "-left-96 top-5"
        } bg-purple-200 mt-5 p-4`}
      >
        {routes.map((route, index) => (
          <Link route={route} key={index}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
