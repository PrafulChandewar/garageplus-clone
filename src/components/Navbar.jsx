
"use client";

import { useState } from "react";
import RequestDemoLink from "./RequestDemoLink";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const pathname = usePathname();
  const router = useRouter();

  const isLegalPage =
    pathname === "/privacy-policy" ||
    pathname === "/terms-and-conditions";

 const navLinks = [
  { label: "Resources", href: "/#solutions" },
  { label: "Features", href: "/#features" },
  { label: "Solutions", href: "/#growingworkshops" },
];

  const openLogin = () => {
    setMenuOpen(false);
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faddbc]">
      <nav className="mx-auto flex h-[58px] max-w-[1280px] items-center justify-between px-4 gap-5
      sm:px-6 lg:h-[76px] lg:px-10 lg:mx-[150px]">

        {/* LOGO */}
        <a
          href="/#hero"
          onClick={closeMenu}
          aria-label="Garage Plus home"
          className="flex shrink-0 items-center p-[1px] gap-[6px] border-2 border-black rounded-[5px]"
        >
          <img
            src="/images/garageplus-logo.webp"
            alt="Garage Plus logo"
            className="h-[27px] w-[27px] object-contain sm:h-[32px] sm:w-[32px]"
          />

          <span className="whitespace-nowrap text-[15px] font-bold tracking-[-0.5px] text-[#171717] sm:text-[19px]">
            GARAGE<span className="text-[#ff8500]">PLUS</span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[14px] font-semibold text-[#333333] transition-colors 
              hover:!text-[#ff8500]"
            >
              {link.label}
              <span className="relative -top-[5px] ml-1 inline-block text-[20px] leading-none">
                ⌄
              </span>
            </a>
            
          ))}
          {isLegalPage && (
  <>
    <a
      href="/privacy-policy"
      className={`whitespace-nowrap text-[14px] font-semibold transition-colors hover:!text-[#ff8500] ${
        pathname === "/privacy-policy"
          ? "text-[#ff8500]"
          : "text-[#333333]"
      }`}
    >
      Privacy Policy
    </a>

    <a
      href="/terms-and-conditions"
      className={`whitespace-nowrap text-[14px] font-semibold transition-colors hover:!text-[#ff8500] ${
        pathname === "/terms-and-conditions"
          ? "text-[#ff8500]"
          : "text-[#333333]"
      }`}
    >
      Terms
    </a>
  </>
)}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-5 md:flex lg:gap-7">
          <button
            type="button"
            onClick={openLogin}
            className="whitespace-nowrap text-[14px] font-semibold text-[#333333] transition-colors hover:text-[#ff8500]"
          >
            Log In
          </button>

          <RequestDemoLink
            className="!inline-flex !min-h-[40px] !items-center !justify-center !whitespace-nowrap !rounded-[6px] !border !border-[#ff8500] !bg-transparent !px-5 !py-2 !text-[13px] !font-semibold !text-[#ff8500] !transition-colors hover:!bg-[#ff8500] hover:!text-white lg:!px-6 lg:!text-[14px]"
          >
            Request a Demo →
          </RequestDemoLink>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md md:hidden"
        >
          {menuOpen ? (
            <span className="text-[28px] font-normal leading-none text-[#ff8500] bg-white py-[5px] px-[10px] rounded-[5px]">
              ×
            </span>
          ) : (
            
              <>
                  <span className="h-[2px] w-6 self-end rounded-full bg-[#ff8500]" />
                  <span className="h-[2px] w-4 self-end rounded-full bg-[#ff8500]" />
                  <span className="h-[2px] w-3 self-end rounded-full bg-[#ff8500]" />
              </>
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-[#f4d9b8] bg-[#fffaf4] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="flex h-[21px] items-center justify-between  
              text-[13px] font-bold text-[#333333] transition-colors hover:text-[#ff8500]"
            >
              {link.label}
              <span className="text-[20px]">→</span>
            </a>
          ))}
          {isLegalPage && (
  <>
    <a
      href="/privacy-policy"
      onClick={closeMenu}
      className="flex min-h-[40px] items-center text-[13px] font-bold text-[#333333] hover:text-[#ff8500]"
    >
      Privacy Policy
    </a>

    <a
      href="/terms-and-conditions"
      onClick={closeMenu}
      className="flex min-h-[40px] items-center text-[13px] font-bold text-[#333333] hover:text-[#ff8500]"
    >
      Terms & Conditions
    </a>
  </>
)}

          <button
            type="button"
            onClick={openLogin}
            className="flex min-h-[43px] w-full items-center text-left text-[13px] font-semibold text-[#333333] hover:text-[#ff8500]"
          >
            Log In
          </button>

          <div className="pt-4" onClick={closeMenu}>
            <RequestDemoLink
              className="!flex !min-h-[42px] !w-full !items-center !justify-center !rounded-[6px] !border !border-[#ff8500] !bg-[#ff8500] !px-4 !py-3 !text-[13px] !font-semibold !text-white hover:!bg-[#ed7600] hover:!text-white"
            >
              Request a Demo →
            </RequestDemoLink>
          </div>
        </div>
      </div>
    </header>
  );
}
