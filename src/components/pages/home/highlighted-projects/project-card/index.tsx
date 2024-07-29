import { TechBadge } from "@/components/tech-badge";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full">
        <Image
         src="/images/profile-pic.png"
         width={420}
         height={304}
         alt="Thumb"
         className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 lg:py-[18px]">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
        </h3>

        <p className="text-gray-400 my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, in? Distinctio, at? Laborum, numquam. Ex libero dolorem quas assumenda nemo.</p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/teste">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
}
