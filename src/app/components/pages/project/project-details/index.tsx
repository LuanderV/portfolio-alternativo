'use client'

import { Button } from '@/app/components/button'
import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/tech-badge'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'
import { motion } from 'framer-motion'
import { FiGlobe } from 'react-icons/fi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'

export const ProjectDetails = () => {
  return (
    <section 
    className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(/images/hero-bg.png) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <SectionTitle
        subtitle="projetos"
        title="BookWise"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <motion.div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum a, quod cum, modi nemo sit incidunt itaque eveniet perferendis soluta ipsum cupiditate perspiciatis nesciunt dicta culpa minima eius, doloribus illum.</p>
      </motion.div>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge
          name="next.js"
          key="#"
          {...techBadgeAnimation}
        />
      </div>
      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
        {...fadeUpAnimation}
      >   
        <a href="" target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="" target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </motion.div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>

    </section>
  )
}
