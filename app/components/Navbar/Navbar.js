'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/fabricio-sobral",
      title: "Linkedin",
    },
    {
      id: 2,
      link: "https://github.com/fzabra/",
      title: "gitHub",
    },
    // {
    //   id: 3,
    //   link: "/portfolio",
    //   title: "portfolio",
    // },
    // {
    //   id: 4,
    //   link: "/team/2",
    //   title: "experience",
    // },
    // {
    //   id: 5,
    //   link: "/contact",
    //   title: "contact",
    // },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
      
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link} target="_blank">{title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link , title}) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;