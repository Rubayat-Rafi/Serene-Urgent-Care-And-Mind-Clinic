"use client";

import { CalendarCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "Services",
    children: [
      { title: "Urgent Care", href: "/services/urgent-care" },
      { title: "Primary Care", href: "/services/primary-care" },
      { title: "Mental Health", href: "/services/mental-health" },
      { title: "TMS Therapy", href: "/services/tms-therapy" },
    ],
  },
  { title: "Membership Plans", href: "/membership-plans" },
  { title: "Patient Resources / Forms", href: "/patient-resources" },
  { title: "Insurance & Payments", href: "/insurance-payments" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  return (
    <header className={`sticky top-0 z-50 bg-background shadow-lg`}>
      <div className="max-w-[1440px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src={"/logo.svg"}
                height={64}
                width={120}
                className=" w-30 lg:w-44 h-auto"
                alt="logo"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              // If the item has children → it's a dropdown parent
              if (item.children) {
                return (
                  <div key={item.title} className="relative group">
                    <button
                      className={`transition-colors duration-300 cursor-pointer ${
                        isActive
                          ? "text-primary font-semibold"
                          : "hover:text-primary hover:font-semibold"
                      }`}
                    >
                      {item.title}
                    </button>

                    {/* Dropdown menu */}
                    <div className="absolute hidden group-hover:block bg-primary shadow-lg p-3 rounded-md w-[200px] ">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block px-3 py-1 hover:text-white text-white"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Normal nav item with href
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`transition-colors duration-200 relative group 
        ${isActive ? "text-primary font-semibold" : "hover:text-primary"}
      `}
                >
                  {item.title}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-200
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
        `}
                  ></span>
                </Link>
              );
            })}

            <Link
              href={"/schedule"}
              className="group relative py-1.5 px-3.5 lg:px-6 lg:py-2 bg-primary rounded-full font-medium text-secondary-background overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-second-primary/50 cursor-pointer text-white"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm lg:text-base">
                Book Appointment
                <CalendarCheck className=" w-4 h-4  lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-second-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-text bg-secondary-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (Overlay + Slide-in Drawer) */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 top-[72px] lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-[72px] left-0 h-[calc(100vh-72px)] w-64 bg-secondary-background shadow-xl z-50 lg:hidden
  transform transition-transform duration-300 flex flex-col ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
      >
        <div className="p-4 h-full flex flex-col justify-between">
          {/* start  */}
          <div className="space-y-2 ">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              // If item has children → render as expandable dropdown
              if (item.children) {
                return (
                  <div key={item.title} className="px-3">
                    <button
                      onClick={() =>
                        setOpenItem(openItem === item.title ? null : item.title)
                      }
                      className="w-full text-left px-3 py-2 text-sm font-medium rounded-md hover:bg-background"
                    >
                      {item.title}
                    </button>

                    {/* Dropdown content */}
                    {openItem === item.title && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-sm rounded-md hover:bg-background"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Normal items
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "font-semibold bg-background"
                      : "hover:bg-background"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* end  */}
          <Link href={"/schedule"}>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="group relative py-1.5 px-3.5 lg:px-6 lg:py-2 bg-primary  rounded-md font-medium text-secondary-background  overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-second-primary/50 w-full cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm lg:text-base">
                Book Appointment
                <CalendarCheck className=" w-4 h-4  lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-second-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
