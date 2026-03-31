import { useState } from "react";
import logo from "../assets/fixtman-logo.png";
import Container from "./Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-[0_2px_12px_0_rgba(115,119,128,0.12)]">
      <Container>
        <div className="flex h-[88px] w-full items-center justify-between">
          <div className="flex items-center gap-8">
            <img src={logo} alt="Fixman logo" className="h-[78px] w-auto" />
            <div className="hidden md:flex items-center gap-6 text-base font-normal text-gray-600">
              <a href="#" className="text-orange-500">
                Home
              </a>
              <a href="#" className="hover:text-orange-500">
                About
              </a>
              <a href="#" className="hover:text-orange-500">
                Contact Us
              </a>
            </div>
          </div>

          <button
            className="md:hidden flex flex-col justify-between h-5 w-6"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`h-[2px] w-full bg-black transition-transform duration-300 ${
                isOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-full bg-black transition-transform duration-300 ${
                isOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 py-4" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-8 text-base font-normal text-gray-600">
          <a href="#" className="text-orange-500">
            Home
          </a>
          <a href="#" className="hover:text-orange-500">
            About
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
