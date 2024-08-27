"use client";

import { useState } from "react";
import { CalendarDaysIcon, HomeIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:h-full relative ">
      <button className="md:hidden p-2 text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 absolute top-10 right-2  z-30" onClick={toggleSidebar}>
        {isOpen ? <ChevronDoubleRightIcon className="h-7 w-7 " /> : <ChevronDoubleLeftIcon className="h-7 w-7  " />}
      </button>
      <div className={`md:hidden fixed inset-0 z-10 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-300`} onClick={toggleSidebar}></div>
      <nav className={`fixed pt-20  sm:pt-0 top-0 left-0 h-full bg-primary-950 shadow-3xl z-20 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex md:border-r md:border-primary-900`}>
        <ul className="flex flex-col gap-2 w-full h-full text-lg  pt-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.name} className={`mb-3  ${pathname === link.href ? "bg-primary-900" : ""}`}>
              <Link onClick={() => setIsOpen(false)} className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200" href={link.href}>
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
          <li className="mt-auto">
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNavigation;
