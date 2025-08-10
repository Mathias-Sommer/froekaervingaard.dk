import { useState } from "react";
import { Link, useNavigate } from "react-router";

const navItems = [
  { name: "Hjem", path: "/" },
  { name: "Arrangementer", path: "/arrangementer" },
  { name: "Shop", path: "https://shop.froekaervingaard.dk" },
  { name: "Om os", path: "/about" },
  { name: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#26432D] text-[#f3f3f3] sticky top-0 z-50 w-full px-[5%] py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
          <div
            className="text-2xl font-black tracking-[-0.04em]"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} // Navigate to home and scroll to top on click
            style={{ cursor: "pointer" }}
          >
            <a>Frøkær Vingård</a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center text-lg font-medium tracking-[-0.03em]">
          {navItems.map(({ name, path }) => (
            <li key={name} className="hover:opacity-80 transition">
              <Link to={path} className="cursor-pointer">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Menu Icon (Mobile Only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X icon (Close)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-lg font-medium tracking-[-0.03em]">
          {navItems.map(({ name, path }) => (
            <li
              key={name}
              className="hover:opacity-80 cursor-pointer transition border-b border-white pb-2"
              onClick={() => setIsOpen(false)}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
