import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLeaf } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Link
            href={"/"}
            class="uppercase text-green text-center text-sm font-bold font-heading mb-4 flex justify-center gap-2"
          >
            <FaLeaf className="text-green" size={22} />
            New leaf
          </Link>
          <h2 class="text-center text-4xl lg:text-5xl font-bold font-heading mb-4">
            <span className="font-[100] mr-3">About</span>Us
          </h2>
          <p className="text-black text-md font-mono font-[300]">
            <span className="text-2xl">W</span>elcome to{" "}
            <span className="text-green font-normal">Newleaf</span>, where we
            are dedicated to guiding students towards their academic and
            professional goals. With a team of experienced{" "}
            <span className="text-green font-normal">counselors </span>and{" "}
            <span className="text-green font-normal">educators</span>, we
            provide personalized advice and support to help students navigate
            the complexities of college admissions and career planning. Our
            mission is to empower students with the knowledge and resources they
            need to make informed decisions and achieve success in their
            educational journey.{" "}
            <span className="text-green font-normal">Join us </span>
            to explore opportunities, develop skills, and unlock your potential
            for a brighter future.
          </p>
        </div>
        <div className="flex">
          <div className="h-[550px]">
            <Image
              src="/images/hero.avif"
              className="object-cover w-full rounded-2xl h-full"
              width={1000}
              height={1000}
            />
          </div>
          <div className="bg-mirrorGreen2 p-8 m-10 rounded-2xl relative -left-32 bottom-1 w-1/2">
            <h5 class="text-center text-4xl lg:text-lg font-[400] font-heading mb-4 text-white">
              INTRODUCTION CREATING HAPPY CUSTOMERS, WITH PEOPLE, PROCESS &
              TECHNOLOGY
            </h5>
            <div className="text-md flex flex-col gap-4 text-white font-[300]">
              <div className="flex gap-5 items-center">
                <span>
                  <FaLeaf />
                </span>
                old startup based out of Mohali, Punjab
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  <FaLeaf />
                </span>
                Business focus on BPO and Managed Services
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  <FaLeaf />
                </span>
                Employee strength of 40, and growing...
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  <FaLeaf />
                </span>
                Inbound and Outbound solutions
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  <FaLeaf />
                </span>
                Multilingual support to enhance customer experience
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  <FaLeaf />
                </span>
                Client base spanning different industries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
