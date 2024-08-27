"use client";
import { useState } from "react";
import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-full max-w-7xl mx-auto grid-cols-[1fr] grid md:grid-cols-[16rem_1fr] gap-12">
      <SideNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="py-1">{children}</div>
    </div>
  );
}
