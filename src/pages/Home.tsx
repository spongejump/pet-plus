import { Button } from "../components/common/button";
import { Image } from "../components/common/Image";
import { lazy, Suspense, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { images } from "../constants/images";
import { animals } from "../constants/animals";
import { slides } from "../constants/slides";
import { ArrowButton } from "../components/common/arrowButton";

const Process = lazy(() => import("../components/common/process"));
const Stand = lazy(() => import("../components/common/stand"));
const Slider = lazy(() => import("../components/common/articles"));

export const Home = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const container = useRef(null);

  useGSAP(() => {
    // Initial container animation
    gsap.from(container.current, {
      opacity: 0,
    });

    // Common animation settings for all images
    const imageAnimation = {
      y: 400,
      opacity: 0,
      duration: 3,
      ease: "elastic.out",
    };

    // Common scroll trigger settings
    const scrollTriggerSettings = {
      toggleActions: "play reverse play reverse", // This makes it work both ways
      start: "top bottom",
      end: "bottom top",
    };

    // Animal lover image animation
    gsap.from(".animal-lover-img", {
      scrollTrigger: {
        trigger: ".animal-lover-img",
        ...scrollTriggerSettings,
      },
      ...imageAnimation,
    });

    // Man buyer image animation
    gsap.from(".man-buyer-img", {
      scrollTrigger: {
        trigger: ".man-buyer-img",
        ...scrollTriggerSettings,
      },
      ...imageAnimation,
    });

    // Animal group image animation
    gsap.from(".animal-group-img", {
      scrollTrigger: {
        trigger: ".animal-group-img",
        ...scrollTriggerSettings,
      },
      ...imageAnimation,
    });

    // Horse image animation
    gsap.from(".horse-img", {
      scrollTrigger: {
        trigger: ".horse-img",
        ...scrollTriggerSettings,
      },
      ...imageAnimation,
    });
  }, []);

  return (
    <div className="relative overflow-hidden" ref={container}>
      <div className="container mx-auto px-12  max-lg:px-9 max-sm:px-4 pt-[112em]">
        <div className="flex justify-between items-center gap-[88px] max-xl:gap-[40px] max-md:flex-col  max-md:items-center">
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <h1 className="font-vietnam whitespace-nowrap font-extrabold  text-[90px] max-[1920px]:text-[90em] max-md:text-[184em] leading-none text-dark max-md:text-center wrap-none">
              BROWSE
              <br />
              HUNDREDS OF
              <br />
              <span className="text-green">ANIMALS</span>
            </h1>
            <p className="font-vietnam font-light text-[26px] max-xl:text-[20px] max-lg:text-[16px]  text-black mt-[13px] mb-[30px] max-w-[520px] max-md:text-center">
              Explore a diverse selection from domestic to exotic animals, all
              from trusted sources.
            </p>
            <Button css="bg-green font-vietnam text-white px-[48px] py-[16px] text-[20px] font-extrabold hover:bg-dark-green hover:text-white transition-colors rounded-full">
              BROWSE ANIMALS
            </Button>
          </div>

          <div className="flex justify-center items-end relative">
            <Image src={images.animal_lover} css="animal-lover-img" alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12 max-lg:px-9 max-sm:px-4  pt-[360px] max-[1920px]:pt-[360em] pb-[340px] max-[1920px]:pb-[340em]  relative">
        <div className="absolute  w-[1110px] h-[905px] max-[1920px]:w-[1110em] max-[1920px]:h-[905em]  bottom-0  translate-y-[10%] max-[1920px]:left-12 max-lg:left-[48em]  z-30 max-md:hidden">
          <Image src={images.man_buyer} alt="" css="w-full man-buyer-img" />
          <ArrowButton css="absolute bottom-0 right-0 -translate-y-[20%] -translate-x-[20%]" />
        </div>
        <div className="flex max-md:flex-col max-md:gap-10">
          <div className="min-w-[50%] max-md:hidden"></div>
          <div className="">
            <h1 className="font-vietnam font-extrabold text-[90px] max-[1920px]:text-[90em]  max-md:text-[184em] leading-none text-dark  whitespace-nowrap max-md:text-center">
              FROM
              <span className="text-green"> VERIFIED</span> <br />
              BREEDERS
            </h1>
            <p className="font-vietnam font-light text-[26px]  max-xl:text-[20px] max-lg:text-[16px]  text-black mt-[25px] max-md:text-center">
              Each listing represents breeders who meet rigorous standards for
              quality and care, giving you peace of mind and confidence in your
              purchase.
            </p>
          </div>
          <div className="relative hidden max-md:block">
            <Image
              src={images.man_buyer_small}
              alt=""
              css="hidden max-md:block"
            />
            <ArrowButton css="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
      <div className="bg-white-green">
        <div className="container mx-auto px-12 max-lg:px-9 max-sm:px-4 pt-[240px] pb-[180px] max-sm:pt-[100px] max-sm:pb-[100px]">
          <h1 className="text-dark font-vietnam text-[90px] max-[1920px]:text-[90em]  max-md:text-[184em]  leading-none font-extrabold text-center">
            SIMPLE PROCESS
          </h1>
          <p className="font-vietnam font-light text-[34px] max-xl:text-[28px] max-lg:text-[24px] max-[480px]:text-[20px] font-vietnam font-light text-center mt-[8px]">
            Enjoy an easy, hassle-free journey from browsing to buying.
          </p>
          <div className="flex justify-between mt-[90px] max-sm:mt-[40px] flex-wrap max-xl:gap-[100px] max-xl:justify-center  max-md:flex-col max-md:gap-[50px] items-center">
            <Suspense fallback={<div>......</div>}>
              <Process
                css="mt-[30px] max-xl:mt-0"
                title="SEARCH"
                content="Browse through our diverse listings of pets and animals."
                source={images.search}
              />
            </Suspense>
            <Suspense fallback={<div>......</div>}>
              <Process
                title="CHOOSE"
                content="Select the pet that best fits your needs and preferences."
                source={images.choose}
              />
            </Suspense>
            <Suspense fallback={<div>......</div>}>
              <Process
                css="mt-[30px] max-xl:mt-0"
                title="CONTACT"
                content="Reach out to the seller for more information and to arrange a meeting."
                source={images.contact}
              />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-12 max-lg:px-9 max-sm:px-4 pt-[112px] pb-[106px]">
        <div className="flex items-center  gap-[85px] max-lg:gap-[24px] max-md:flex-col">
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <h1 className="text-[90px] max-[1920px]:text-[90em] max-md:text-[184em] max-md:text-center font-vietnam font-extrabold leading-none text-dark whitespace-nowrap">
              BROWSE <br />
              BEYOND PETS
            </h1>
            <p className="font-vietnam max-w-[660px] max-md:text-center font-light text-[26px] max-xl:text-[20px] max-lg:text-[16px] text-black mt-[16px] mb-[30px]">
              Explore a wide range of animals beyond just pets. Discover
              livestock, exotic species, and more!
            </p>
            <Button css="bg-green font-vietnam text-white px-[48px] py-[16px] text-[20px] font-extrabold hover:bg-dark-green hover:text-white transition-colors rounded-full">
              BROWSE ANIMALS
            </Button>
          </div>
          <div className=" flex justify-center items-center relative">
            <Image src={images.animal_group} alt="" css="animal-group-img" />
          </div>
        </div>
      </div>

      <div className="bg-green">
        <div className="container mx-auto px-12 max-lg:px-9 max-sm:px-4  pt-[95px] pb-[111px]">
          <h1 className="font-vietnam font-extrabold text-[90px] max-[1920px]:text-[90em] max-md:text-[184em] text-white text-center">
            WHY WE STAND OUT
          </h1>
          <div className="flex justify-between gap-5 max-xl:flex-wrap items-start max-xl:gap-10 pt-[52px] max-xl:justify-center">
            <Suspense fallback={<div>......</div>}>
              <Stand
                image={images.verified_breeders}
                title="Verified Breeders"
                content="Shop with confidence, knowing our sellers are checked and verified. This ensures reliable transactions and a safe pet-buying experience."
              />
            </Suspense>
            <Suspense fallback={<div>......</div>}>
              <Stand
                image={images.wide_selection}
                title="Wide Selection"
                content="Explore a wide selection of animals to find the right one for you. With a range of breeds, ages, and sizes, our wide selection makes it simple to find exactly what you need."
              />
            </Suspense>
            <Suspense fallback={<div>......</div>}>
              <Stand
                image={images.easy_search}
                title="Easy Search"
                content="Easily find and compare pets using our simple search tools. Filter by breed, age, and more to quickly find and evaluate the best options for your new furry friend.  "
              />
            </Suspense>
          </div>
          <div className="flex justify-center pt-[80px]">
            <Button css="bg-white font-vietnam text-green px-[48px] py-[16px] text-[20px] font-extrabold hover:bg-dark-green hover:text-white transition-colors rounded-full">
              BROWSE ANIMALS
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-12  max-lg:px-9 max-sm:px-4 pt-[87px]">
        <h1 className="font-vietnam font-extrabold text-[90px] max-[1920px]:text-[90em] max-md:text-[184em] text-dark text-center">
          INSIGHTS
        </h1>
        <p className="font-vietnam font-light text-[30px] max-xl:text-[24px] max-lg:text-[20px] text-center text-black mt-[11px]">
          Discover expert tips and heartwarming stories
        </p>
        <p className="text-green font-vietnam font-light text-[18px] text-center mt-[25px] mb-[73px] text-center underline">
          Read all articles
        </p>
        <Suspense fallback={<div>......</div>}>
          <Slider slides={slides} />
        </Suspense>
      </div>

      <div className="container mx-auto px-12 max-lg:px-9 max-sm:px-4 pt-[214px] max-sm:pt-[40px]">
        <div className="rounded-[25px] bg-white-green pt-[90px] pb-[120px] max-sm:pt-[40px] max-sm:pb-[60px] relative">
          <div className="flex items-center gap-[40px] max-sm:gap-[20px]">
            <div className="flex-[1_1_45%] max-2xl:flex-[1_1_20%] flex items-center justify-center relative max-xl:hidden"></div>
            <div className="flex-[1_1_55%] max-2xl:flex-[1_1_80%] flex flex-col justify-center items-center px-12 max-sm:px-4 max-sm:w-full">
              <h2 className="text-dark font-vietnam font-extrabold text-[60px] max-[1920px]:text-[60em] max-md:text-[40px] max-sm:text-[32px]">
                NEWS & TIPS
              </h2>
              <p className="text-[24px] text-dark mb-9 font-normal text-center max-xl:text-[20px] max-lg:text-[16px] max-sm:mb-6 max-sm:px-2">
                Stay in the Loop: Subscribe for pet news and updates!
              </p>
              <div className="flex flex-col max-w-[600px] w-full max-sm:px-4">
                <div className="relative w-full">
                  <div className="flex max-sm:flex-col gap-0 max-sm:gap-3 w-full">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 rounded-full border-2 border-green text-[16px] sm:text-[18px] outline-none bg-white sm:pr-[180px] max-sm:pr-6 transition-all focus:border-dark-green"
                      required
                    />
                    <button className="bg-green text-white font-vietnam font-bold text-[16px] px-[30px] py-[14px] rounded-full hover:bg-dark-green transition-colors sm:absolute sm:right-[6px] sm:top-1/2 sm:-translate-y-1/2 max-sm:w-full">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
                <p className="text-[12px] font-vietnam font-light text-dark mt-3 max-sm:text-center max-sm:px-2">
                  We respect your privacy. Your email address will only be used
                  to send you updates and offers. We do not sell or share your
                  information with third parties.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[480px] h-[564px] max-[1920px]:w-[480em] max-[1920px]:h-[564em] absolute bottom-0 left-[10%] max-2xl:left-0 max-xl:hidden">
            <Image src={images.horse} alt="" css="w-full horse-img" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-12 pt-[170px] max-lg:pt-[100px] flex gap-[120px] max-xl:gap-[60px] items-start max-lg:flex-col ">
        <div className="">
          <h1 className="text-[90px] max-[1920px]:text-[90em] max-md:text-[184em] font-vietnam font-extrabold text-dark leading-none">
            POPULAR <br /> CHOICES{" "}
          </h1>
          <p className="text-black text-[30px] max-xl:text-[24px] max-lg:text-[20px]  font-medium pt-[14px]">
            Highlights of our top picks
          </p>
          <p className="text-black text-[20px] max-xl:text-[16px]  font-normal pt-6">
            Can't find it on the list?
          </p>
          <p className="text-green text-[16px] bg-medium-yellow py-1 px-2 rounded-full mt-3 w-[230px] text-center">
            Browse the whole list of pets
          </p>
        </div>
        <div className=" flex justify-between gap-[136px] max-xl:gap-[40px] max-sm:w-full overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pt-[10px]">
          {Object.entries(animals).map(([category, item]) => (
            <div
              key={category}
              className="flex flex-col gap-[12px] whitespace-nowrap"
            >
              <h3 className="text-dark font-vietnam text-[18px] font-semibold leading-none">
                {category}
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {item.items.map((animal) => (
                  <li
                    key={animal}
                    className="text-dark font-vietnam font-light text-[16px]"
                  >
                    {animal}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-12 pt-[180px] max-lg:pt-[100px] pb-[90px] flex flex-col items-center">
        <h1 className="text-green text-center text-[40px] max-[1920px]:text-[40em] max-lg:text-[60em] max-sm:text-[20px] font-extrabold font-vietnam">
          JOIN AS A SELLER
        </h1>
        <p className="text-black  text-[24px] max-xl:text-[20px] max-lg:text-[16px] font-medium font-vietnam text-center">
          Join our pet marketplace and reach more buyers!
        </p>
        <p className="text-black  text-[16px] max-xl:text-[14px]  font-medium mt-1 text-center">
          Sign up now and start showcasing your pets to a dedicated community of
          pet lovers!
        </p>
        <a href="/" className="text-green underline pt-4">
          Sign up now!
        </a>
      </div>
    </div>
  );
};
