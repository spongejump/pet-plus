import { useState } from "react";
import { images } from "../../../constants/images";
import { navItems } from "../../../constants/navigation";
import { NavItemsKey } from "../../../types/navigation";
import { HeaderProps } from "../../../types/header";
import { Image } from "../../common/Image";

export const Header = ({ variant = "home" }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<NavItemsKey | null>(
    null
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getBgColor = () => {
    switch (variant) {
      case "main":
        return "bg-[#D9D9D9]";
      case "home":
      default:
        return "bg-white";
    }
  };

  return (
    <div
      className={`relative h-[120px] max-2xl:h-[110px] max-xl:h-[100px] max-lg:h-[90px] max-md:h-[80px] ${getBgColor()}`}
    >
      <header className="container mx-auto relative h-full px-12  max-sm:px-4 max-xl:px-[60px]  py-0 flex items-center justify-between">
        {/* Logo - Mass 1 */}
        <div className="flex items-center shrink-0">
          <img
            src={images.logo}
            alt="Pets Plus"
            className="h-[44px] max-2xl:h-[40px] max-xl:h-9 max-lg:h-7 max-md:h-6 object-contain"
          />
        </div>

        {/* Navigation and Search - Mass 2 */}
        <div className="flex items-center gap-[56px] max-2xl:gap-[40px] max-xl:gap-[24px] max-lg:gap-[16px] max-md:hidden">
          {/* Navigation */}
          <nav className="flex gap-[36px] max-2xl:gap-[24px] max-xl:gap-[20px] max-lg:gap-[12px] items-center">
            {Object.entries(navItems).map(([key, { label, items }]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key as NavItemsKey)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={`/${key.toLowerCase()}`}
                  className="font-vietnam font-extrabold text-[18px] max-2xl:text-[16px] max-xl:text-[14px] max-lg:text-[12px] leading-none tracking-custom uppercase text-gray-800 hover:text-[#008264] transition-colors flex items-center gap-1"
                >
                  {label}
                  <Image
                    src={images.bottom_arrow}
                    alt="arrow"
                    css="w-4 h-4 max-2xl:w-3 max-2xl:h-3 max-lg:w-2 max-lg:h-2"
                  />
                </a>

                {/* Dropdown */}
                {activeDropdown === key && (
                  <div className="absolute top-full left-0 mt-2 w-56 max-2xl:w-48 max-lg:w-40 bg-white shadow-lg rounded-md overflow-hidden z-50">
                    {items.map((item) => (
                      <a
                        key={item}
                        href={`/${key.toLowerCase()}/${item.toLowerCase()}`}
                        className="block px-4 py-2 text-[14px] max-2xl:text-[13px] max-lg:text-[11px] text-gray-700 hover:bg-gray-100 font-vietnam"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[445px] max-2xl:w-[360px] max-xl:w-[260px] max-lg:w-[180px] max-md:w-[160px] h-[60px] max-2xl:h-[50px] max-lg:h-[36px] rounded-[235px] border border-[#D6D6D6] outline-none pl-6 max-2xl:pl-4 pr-12 max-2xl:pr-10  font-vietnam font-light text-[16px] max-2xl:text-[14px] max-lg:text-[11px]"
            />
            <button className="absolute right-5 max-2xl:right-4 top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-5 max-2xl:w-4 max-2xl:h-4 max-lg:w-3 max-lg:h-3 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="hidden max-md:flex p-2 items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-gray-800 transform transition-transform ${
                isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-gray-800 transform transition-transform ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`hidden max-md:block fixed inset-0 bg-white z-50 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex justify-between items-center mb-6">
              <img
                src={images.logo}
                alt="Pets Plus"
                className="h-8 object-contain"
              />
              <button
                className="p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[40px] rounded-[235px] border border-gray-200 outline-none pl-4 pr-8 font-vietnam font-light text-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col">
              {Object.entries(navItems).map(([key, { label, items }]) => (
                <div key={key} className="border-b border-gray-100">
                  <button
                    className="w-full py-3 flex items-center justify-between font-vietnam font-extrabold text-base uppercase text-gray-800"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === key ? null : (key as NavItemsKey)
                      )
                    }
                  >
                    {label}
                    <Image
                      src={images.bottom_arrow}
                      alt="arrow"
                      css={`w-3 h-3 transform transition-transform ${
                        activeDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === key && (
                    <div className="pb-3">
                      {items.map((item) => (
                        <a
                          key={item}
                          href={`/${key.toLowerCase()}/${item.toLowerCase()}`}
                          className="block py-2 pl-4 text-sm text-gray-600 font-vietnam hover:text-[#008264]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
