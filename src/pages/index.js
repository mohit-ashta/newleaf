import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { SlArrowRight } from "react-icons/sl";
import { HiPhone } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { LeaderShip } from "@/components/organisms/home/leadership";
import { GovApproach } from "@/components/organisms/home/gov-approach";
import { EduCounseling } from "@/components/organisms/home/edu-counseling";
import AboutUs from "@/components/organisms/home/about-us";
import { Footer } from "@/components/organisms/home/footer";
export default function Home() {
  return (
    <>
      <section className="relative pb-20 xl:pb-32 overflow-hidden hero-section">
        <nav className="py-9 mb-12 md:mb-24">
          <div className="container px-4 mx-auto">
            <div className="flex items-center relative">
              <Link
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block text-lg font-bold text-white"
                href="#"
              >
                <img className="h-10" src="/images/logo.png" alt="logo" /> NewLeaf
              </Link>
              <div className="lg:hidden ml-auto">
                <button className="flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200">
                  <FaBarsStaggered />
                </button>
              </div>
              <ul className="hidden lg:flex lg:w-auto lg:space-x-12">
                <li className="group relative">
                  <Link
                    className="inline-block text-md text-cherryRed text-offWhite font-medium"
                    href="#"
                  >
                    Home
                  </Link>
                  <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs z-30">
                    <div className="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                    <div className="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                      <div className="pb-3 mb-3 border-b border-gray-100">
                        <Link
                          className="block py-3 px-4 text-md text-cherryRed hover:bg-lightGreen hover:text-offWhite rounded-lg"
                          href="#"
                        >
                          Home
                        </Link>
                        <Link
                          className="block py-3 px-4 text-md text-cherryRed hover:bg-lightGreen hover:text-offWhite rounded-lg"
                          href="#"
                        >
                          Solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    className="inline-block text-md text-offWhite hover:text-cherryRed font-medium"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block text-md text-offWhite hover:text-cherryRed font-medium"
                    href="#"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block text-md text-offWhite hover:text-cherryRed font-medium"
                    href="#"
                  >
                    How We Work
                  </Link>
                </li>
              </ul>
              <div className="hidden lg:block ml-auto">
                <div className="flex items-center">
                  <Link
                    className="flex items-center gap-3 mr-9 text-md font-semibold text-offWhite"
                    href="#"
                  >
                    <MdEmail size={19} className="text-cherryRed" />{" "}
                    newleaf@info.com
                  </Link>
                  <Link
                    className="flex items-center gap-3 mr-9 text-md font-semibold text-offWhite"
                    href="#"
                  >
                    <HiPhone size={19} className="text-cherryRed" />{" "}
                    +919417385030
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container px-4 mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl xs:text-6xl md:text-6xl xl:text-10xl font-bold text-offWhite mb-8 sm:mb-14">
              <span>
                World Best Newleaf <br /> Startup
              </span>
              <span className="ml-4">Ever</span>
            </h1>
            <div className="flex justify-center  mb-24">
              <button className="bg-green flex items-center px-4 py-3 rounded-lg gap-3 text-offWhite hover:text-green hover:bg-white font-[400] transition-colors duration-300">
                Meet The Expert <SlArrowRight />
              </button>
            </div>
          </div>
          <div className="xl:flex justify-between items-end">
            <div className="flex flex-col mb-14 xl:mb-0">
              <div className="relative w-full max-w-md bg-offWhite rounded-lg">
                <div className="relative flex flex-col">
                  <div className="xs:w-100 max-w-md  p-4  rounded-3xl">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="text-3xl xs:text-5xl font-semibold text-cherryRed">
                          1218k+
                        </span>
                        <span className="block text-md text-gray-500">
                          admission Done
                        </span>
                      </div>
                      <div className="h-12 w-px mx-auto bg-orange-200"></div>
                      <div>
                        <span className="text-3xl xs:text-5xl font-semibold text-cherryRed">
                          20+
                        </span>
                        <span className="block text-md text-gray-500">
                          Awards Winning
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex justify-end max-w-xs sm:max-w-sm md:max-w-none ml-auto">
              <div className="mb-6 md:mb-0 md:mr-8 pt-3 text-white">
                <BsArrowRight />
              </div>
              <div className="max-w-md">
                <p className="md:text-xl text-white font-semibold">
                  Transforming the learning experience with cutting-edge
                  technology, innovative teaching methods, and a commitment to
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      <EduCounseling />
      <LeaderShip />
      <GovApproach />
      <Footer/>
    </>
  );
}
