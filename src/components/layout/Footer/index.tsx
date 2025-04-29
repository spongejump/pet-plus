import { images } from "../../../constants/images";
import { footerSections } from "../../../constants/footer";

export const Footer = () => {
  return (
    <footer className="bg-white pt-16 max-xl:pt-12 max-lg:pt-10 max-sm:pt-8 pb-8">
      <div className="container mx-auto border-t border-[#D6D6D6] px-[162px] max-2xl:px-[120px] max-xl:px-[60px] max-lg:px-[30px] max-md:px-[24px] max-sm:px-[16px]">
        <div className="flex max-lg:flex-col justify-between items-start pt-[67px] max-2xl:pt-[50px] max-xl:pt-[40px] max-lg:pt-[32px] gap-[80px] max-2xl:gap-[60px] max-xl:gap-[40px] max-lg:gap-[32px]">
          {/* Logo and Social Links */}
          <div className="min-w-[180px] max-lg:min-w-0 max-lg:mb-8">
            <img
              src={images.dark_logo}
              alt="Pets Plus"
              className="h-[35px] max-2xl:h-[32px] max-xl:h-[28px] max-lg:h-[24px] mb-6 max-lg:mb-4"
            />
            <div className="flex gap-4">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={images.pinterest}
                  alt="Pinterest"
                  className="w-6 h-6 max-lg:w-5 max-lg:h-5"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={images.facebook}
                  alt="Facebook"
                  className="w-6 h-6 max-lg:w-5 max-lg:h-5"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={images.instagram}
                  alt="Instagram"
                  className="w-6 h-6 max-lg:w-5 max-lg:h-5"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={images.youtube}
                  alt="YouTube"
                  className="w-6 h-6 max-lg:w-5 max-lg:h-5"
                />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-[12px] text-[#151618] font-vietnam font-light">
                © Copyright, PetsandPlus. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="flex flex-wrap gap-[56px] max-2xl:gap-[40px] max-xl:gap-[32px] max-lg:gap-[24px]">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className="min-w-[120px] max-lg:min-w-[100px]"
              >
                <h3 className="font-bold text-gray-800 mb-4 max-lg:mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-3 max-lg:space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-[#008264] transition-colors text-[14px] max-lg:text-[13px] font-vietnam font-light whitespace-nowrap"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
