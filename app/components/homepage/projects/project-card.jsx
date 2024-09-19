// @flow strict
import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaEarthAsia } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          height={1080}
          width={1920}
          alt=""
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col cursor-default">
        <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
          {project.name}
        </p>
        <p className="my-1 text-xs lg:text-sm text-[#46dd80]">{project.role}</p>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="p-2 sm:p-3 flex gap-6 cursor-default m-auto justify-end">
        <Link href={project.code}>
          <BsGithub size={25} />
        </Link>
        <Link href={project.demo}>
          <FaEarthAsia size={25} />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
