import { Button } from "../components/common/button";
import { Image } from "../components/common/Image";
import { Process } from "../components/common/process";
import { Stand } from "../components/common/stand";
import { Slider } from "../components/common/articles";
import { images } from "../constants/images";
import { animals } from "../constants/animals";
import { slides } from "../constants/slides";
import { ArrowButton } from "../components/common/arrowButton";

export const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-12 max-2xl:px-8 max-sm:px-6 max-[400px]:px-2 pt-[118px] max-md:pt-[60px] max-2xl:pt-[160px]">
        <div className="flex justify-between items-center gap-[88px] max-xl:gap-[40px] max-md:flex-col max-md:items-center">
          <div className="flex-[1_1_50%] max-md:flex max-md:flex-col max-md:items-center">
            <h1 className="font-vietnam whitespace-nowrap font-extrabold text-[90px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] max-[480px]:text-[30px] leading-none text-dark max-md:text-center wrap-none">
              BROWSE
              <br />
              HUNDREDS OF
              <br />
              <span className="text-green">ANIMALS</span>
            </h1>
            <p className="font-light text-[26px] max-xl:text-[20px] max-lg:text-[16px]  text-black mt-[13px] mb-[30px] max-w-[520px] max-md:text-center">
              Explore a diverse selection from domestic to exotic animals, all
              from trusted sources.
            </p>
            <Button css="bg-green text-white text-[24px] max-xl:text-[18px]  font-extrabold hover:bg-dark-green  transition-colors">
              BROWSE ANIMALS
            </Button>
          </div>

          <div className="flex-[1_1_50%] flex justify-center items-end relative max-md:mt-16">
            <div className="relative w-[600px] h-[600px] max-2xl:w-[480px] max-2xl:h-[480px] max-xl:w-[360px] max-xl:h-[360px] max-lg:w-[300px] max-lg:h-[300px] max-[480px]:w-[240px] max-[480px]:h-[240px] ">
              <Image
                src={images.green_rect_item}
                alt=""
                css="absolute top-0 -translate-y-5 left-0 w-full h-full object-cover rounded-[40px] z-0 max-md:left-10"
              />
              <Image
                src={images.woman_buyer}
                alt=""
                css="absolute bottom-5 -translate-x-[20%]  object-contain z-10 max-md:left-10"
              />
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] max-2xl:w-[120px] max-2xl:h-[120px] max-xl:w-[90px] max-xl:h-[90px] max-lg:w-[70px] max-lg:h-[70px] max-[480px]:w-[60px] max-[480px]:h-[60px]  max-xl:bottom-2 max-md:translate-x-10 max-[480px]">
                <Image
                  src={images.yellow_rect}
                  alt="Cute rabbit"
                  css="absolute bottom-0 right-0  z-30"
                />
                <Image
                  src={images.rabbit}
                  alt="Cute rabbit"
                  css="absolute bottom-0 right-0  translate-x-[20%] z-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-12  pt-[362px] pb-[340px] max-xl:pt-[200px] max-sm:pt-[80px] max-lg:pb-[200px] max-sm:pb-[170px] relative">
        <div className="flex max-lg:flex-col">
          <div className="min-w-[50%] max-lg:hidden"></div>
          <div className="">
            <h1 className=" font-vietnam font-extrabold text-[90px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] max-[480px]:text-[30px] leading-none text-dark max-lg:text-center whitespace-nowrap">
              FROM
              <span className="text-green"> VERIFIED</span> <br />
              BREEDERS
            </h1>
            <p className="font-light text-[26px]  max-xl:text-[20px] max-lg:text-[16px]  text-black mt-[25px] max-lg:text-center">
              Each listing represents breeders who meet rigorous standards for
              quality and care, giving you peace of mind and confidence in your
              purchase.
            </p>
          </div>
          <div className="relative hidden max-lg:flex  justify-center items-center mt-[120px]">
            <div className="bg-light-yellow w-full h-full  w-[400px] h-[400px] max-sm:w-[300px] max-sm:h-[300px] rounded-[40px] relative">
              <Image
                src={images.man_buyer}
                alt=""
                css="absolute bottom-0 right-[10%] w-[72%]"
              />
              <ArrowButton css="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-100px] max-lg:hidden">
          <div className="relative">
            <Image
              src={images.yellow_rect_item}
              alt=""
              css="max-2xl:w-4/5 max-xl:w-[70%]"
            />
            <div className="absolute bottom-0 left-[70px] max-xl:left-[16px]">
              <Image
                src={images.man_buyer}
                alt=""
                css="max-2xl:w-4/5 max-xl:w-[70%]"
              />
            </div>
            <div className="absolute bottom-[40px] max-xl:bottom-[15px]  right-[5%] max-2xl:right-[25%] max-xl:right-[32%]">
              <ArrowButton />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white-green">
        <div className="container mx-auto px-12 pt-[240px] pb-[180px] max-sm:pt-[100px] max-sm:pb-[100px]">
          <h1 className="text-dark font-vietnam text-[90px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] max-[480px]:text-[30px] leading-none font-extrabold text-center">
            SIMPLE PROCESS
          </h1>
          <p className="font-light text-[34px] max-xl:text-[28px] max-lg:text-[24px] font-light text-center mt-[8px]">
            Enjoy an easy, hassle-free journey from browsing to buying.
          </p>
          <div className="flex justify-between mt-[90px] flex-wrap max-xl:gap-[100px] max-xl:justify-center max-md:gap-[50px]">
            <Process
              css="mt-[30px] max-xl:mt-0"
              title="SEARCH"
              content="Browse through our diverse listings of pets and animals."
              source={images.search}
            />
            <Process
              title="CHOOSE"
              content="Select the pet that best fits your needs and preferences."
              source={images.choose}
            />
            <Process
              css="mt-[30px] max-xl:mt-0"
              title="CONTACT"
              content="Reach out to the seller for more information and to arrange a meeting."
              source={images.contact}
            />
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto px-12 pt-[265px] pb-[415px]">
        <div className="flex align-center  gap-[85px] relative">
          <div className="">
            <h1 className="text-[90px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] max-[480px]:text-[30px] font-vietnam font-extrabold leading-none text-dark whitespace-nowrap">
              BROWSE <br />
              BEYOND PETS
            </h1>
            <p className="font-light text-[26px] leading-[40px] text-black mt-[16px] mb-[30px]">
              Explore a wide range of animals beyond just pets.
              <br />
              Discover livestock, exotic species, and more!
            </p>
            <Button css="bg-green text-white px-[48px] py-[16px] text-[24px] font-extrabold hover:bg-green/90 transition-colors rounded-[16px]">
              BROWSE ANIMALS
            </Button>
          </div>

          <div className="relative w-[800px] max-2xl:w-[600px] border border-red-700">
            <Image
              src={images.puppy_with_girl}
              alt="Puppy with girl"
              css="object-cover rounded-[32px] absolute top-0 -translate-y-1/3 left-0 -tranlsate-x-1/2"
            />
            <div className="absolute top-0 left-1/2 border-[16px] border-white rounded-[52px]">
              <Image
                src={images.cat_baby}
                alt="Cute kitten"
                css="w-full h-full object-cover rounded-[32px]"
              />
            </div>

            <div className="absolute top-1/2 translate-y-1/2 right-1/2">
              <Image
                src={images.goat_baby}
                alt="Baby goat"
                css="w-full h-full object-cover rounded-[32px]"
              />
            </div>
            <div className="absolute top-1/2 translate-y-1/2 right-[2%]">
              <Image
                src={images.horse_baby}
                alt="Baby horse"
                css="w-full h-full object-cover rounded-[32px]"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-green">
        <div className="container mx-auto px-12 pt-[95px] pb-[111px]">
          <h1 className="font-vietnam font-extrabold text-[90px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] max-[480px]:text-[30px] text-white text-center">
            WHY WE STAND OUT
          </h1>
          <div className="flex items-start justify-between gap-5 pt-[52px] max-xl:flex-wrap max-xl:justify-center">
            <Stand
              image={images.verified_breeders}
              title="Verified Breeders"
              content="Shop with confidence, knowing our sellers are checked and verified. This ensures reliable transactions and a safe pet-buying experience."
            />
            <Stand
              image={images.wide_selection}
              title="Wide Selection"
              content="Explore a wide selection of animals to find the right one for you. With a range of breeds, ages, and sizes, our wide selection makes it simple to find exactly what you need."
            />
            <Stand
              image={images.easy_search}
              title="Easy Search"
              content="Easily find and compare pets using our simple search tools. Filter by breed, age, and more to quickly find and evaluate the best options for your new furry friend.  "
            />
          </div>
          <div className="flex justify-center pt-[80px]">
            <Button css="bg-white font-vietnam text-green px-[48px] py-[16px] text-[20px] font-normal hover:bg-dark-green hover:text-white transition-colors rounded-full">
              BROWSE ANIMALS
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-12 pt-[87px]">
        <h1 className="font-vietnam font-extrabold text-[90px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] max-[480px]:text-[30px] text-dark text-center">
          INSIGHTS
        </h1>
        <p className="font-light text-[30px] max-xl:text-[24px] max-lg:text-[20px] text-center text-black mt-[11px]">
          Discover expert tips and heartwarming stories
        </p>
        <p className="text-green font-light text-[18px] text-center mt-[25px] mb-[73px] text-center">
          Read all articles
        </p>
        <Slider slides={slides} />
      </div>

      {/* <div className="container mx-auto px-12  pt-[214px]">
        <div className="rounded-[25px] bg-white-green pt-[90px] pb-[120px] relative">
          <div className="flex items-center gap-[40px]">
            <div className="flex-[1_1_45%] flex items-center justify-center relative"></div>
            <div className="flex-[1_1_55%]">
              <h2 className="text-dark font-vietnam font-extrabold text-[60px] max-xl:text-[40px] max-lg:text-[30px] max-[480px]:text-[20px]">
                NEWS & TIPS
              </h2>
              <p className="text-[24px] text-dark mb-9 font-normal max-xl:text-[20px] max-lg:text-[16px] max-[480px]:text-[12px]">
                Stay in the Loop: Subscribe for pet news and updates!
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border  flex-1 w-[520px]  px-6 py-4 rounded-full border-2 border-green text-[20px] outline-none mr-[-40px] bg-white"
                  required
                />
                <Button css="absolute left-[320px] top-[0px] bg-green text-white font-extrabold text-[20px] rounded-full px-10  ml-4 shadow-md hover:bg-green/90 transition-colors">
                  SUBSCRIBE
                </Button>
              </div>
              <p className="text-[14px] text-dark font-normal max-w-[600px] mt-3">
                We respect your privacy. Your email address will only be used to
                send you updates and offers. We do not sell or share your
                information with third parties.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 z-10 left-[10%]">
            <Image src={images.horse} alt="" />
          </div>
          <div className="absolute bottom-0 left-[10%] bg-light-yellow w-[344px] h-[564px] rounded-t-full"></div>
        </div>
      </div> */}

      <div className="container mx-auto px-12 pt-[170px] max-lg:pt-[100px] flex gap-[120px] max-xl:gap-[60px] items-start max-lg:flex-col">
        <div className="">
          <h1 className="text-[90px] max-2xl:text-[75px] max-xl:text-[60px] max-lg:text-[40px] max-[480px]:text-[30px] font-vietnam font-normal text-dark">
            POPULAR <br /> CHOICES{" "}
          </h1>
          <p className="text-black text-[30px] max-xl:text-[24px] max-lg:text-[20px]  font-normal pt-[14px]">
            Highlights of our top picks
          </p>
          <p className="text-black text-[20px] font-normal pt-6">
            Can't find it on the list?{" "}
          </p>
          <p className="text-green bg-medium-yellow py-1 px-2 rounded-full mt-3 w-[230px] text-center">
            Browse the whole list of pets
          </p>
        </div>
        <div className="flex justify-between gap-[136px] max-xl:gap-[40px] max-sm:w-full overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {Object.entries(animals).map(([category, item]) => (
            <div
              key={category}
              className="flex flex-col gap-[12px] whitespace-nowrap"
            >
              <h3 className="text-dark font-vietnam text-[18px]">{category}</h3>
              <ul className="flex flex-col gap-[12px]">
                {item.items.map((animal) => (
                  <li key={animal} className="text-dark font-light text-[16px]">
                    {animal}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-12 pt-[180px] max-lg:pt-[100px] pb-[90px] flex flex-col items-center">
        <h1 className="text-green text-center text-[40px] max-xl:text-[30px] max-lg:text-[20px] font-extrabold font-vietnam">
          JOIN AS A SELLER
        </h1>
        <p className="text-black  text-[24px] max-xl:text-[20px] max-lg:text-[16px] font-normal font-vietnam text-center">
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
