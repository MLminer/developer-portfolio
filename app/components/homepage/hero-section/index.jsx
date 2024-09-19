// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            {personalData.email && (
              <Link
                href={`mailto:${personalData.email}`}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <MdAlternateEmail size={30} />
              </Link>
            )}
            {personalData.github && (
              <Link
                href={personalData.github}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
            )}
            {personalData.facebook && (
              <Link
                href={personalData.facebook}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaFacebook size={30} />
              </Link>
            )}
            {personalData.leetcode && (
              <Link
                href={personalData.leetcode}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <SiLeetcode size={30} />
              </Link>
            )}
            {personalData.twitter && (
              <Link
                href={personalData.twitter}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaTwitterSquare size={30} />
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>View my CV</span>
              <FaEye size={16} />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-red-500">class</span>
                <span className="mr-2 text-amber-300">AIengineer</span>
                <span className="text-gray-400">{":"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-red-500">def</span>
                <span className="text-pink-500">{`__init__`}</span>
                <span className="text-gray-400">(self):</span>
              </div>
              <div className="ml-12 lg:ml-24">
                <span className="text-white">self.languages</span>
                <span className="mr-2 text-cyan-400">
                  {" "}
                  = ["Python", "R", "Java"]
                </span>
              </div>
              <div className="ml-12 lg:ml-24">
                <span className="text-white">self.frameworks</span>
                <span className="mr-2 text-cyan-400">
                  {" "}
                  = ["TensorFlow", "PyTorch"]
                </span>
              </div>
              <div className="ml-12 lg:ml-24">
                <span className="text-white">self.currently_learning</span>
                <span className="mr-2 text-cyan-400"> = "Generative AI"</span>
              </div>
              <div className="ml-12 lg:ml-24">
                <span className="text-white">self.fun_fact</span>
                <span className="mr-2 text-cyan-400">
                  {" "}
                  = "I sometimes dream in tensors and wake up debugging neural
                  nets."
                </span>
              </div>

              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-red-500">def</span>
                <span className="text-pink-500">{`train_model`}</span>
                <span className="text-gray-400">(self):</span>
              </div>
              <div className="ml-12 lg:ml-24">
                <span className="text-purple-500">print</span>
                <span className="text-white">(</span>
                <span className="mr-2 text-cyan-400">
                  "Feeding data to the machine..."
                </span>
                <span className="text-white">)</span>
              </div>
              <div className="ml-12 lg:ml-24">
                <span className="text-purple-500">print</span>
                <span className="text-white">(</span>
                <span className="mr-2 text-cyan-400">
                  "Tweaking the model..."
                </span>
                <span className="text-white">)</span>
              </div>
              <div className="ml-12 lg:ml-24">
                <span className="text-purple-500">print</span>
                <span className="text-white">(</span>
                <span className="mr-2 text-cyan-400">
                  "Celebrating 0.001% improvement in accuracy..."
                </span>
                <span className="text-white">)</span>
              </div>

              <div className="mt-4">
                <div className="blink">
                  <span className="mr-2 text-red-500">ml_dev</span>
                  <span className="text-cyan-400"> = </span>
                  <span className="mr-2 text-amber-300"> MLDeveloper</span>
                  <span className="text-white">{"()"}</span>
                </div>

                <div className="blink">
                  <span className="text-red-500">ml_dev</span>
                  <span className="text-white">.</span>
                  <span className="text-pink-500">{`train_model`}</span>
                  <span className="text-white">{"()"}</span>
                </div>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
