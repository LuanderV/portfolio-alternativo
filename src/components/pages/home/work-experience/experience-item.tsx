'use client'

import { TechBadge } from "@/components/tech-badge"
import Image from "next/image"
import { motion } from 'framer-motion'
import { fadeUpAnimation } from "@/app/lib/animations"

export const ExperienceItem = () => {
  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center flex-col gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/icons/project-title-icon.svg"
            width={40}
            height={40}
            className="rounded-full"
            alt="ssss"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a 
            href=""
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ Wilson Sons
          </a>
          <h4 className="text-gray-300">Desenvolvedor</h4>
          <span className="text-gray-500">
            out 2022 ° O momento ° (6 meses)
          </span>
          <div className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quam.
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="React"/>
          <TechBadge name="React"/>
          <TechBadge name="React"/>
        </div>
      </div>
    </motion.div>
  )
}
