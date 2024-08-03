'use client'

import { NavItem } from './nav-item'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 z-10 h-24 w-full flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link className='flex items-center' href="/">
          <span className="material-symbols-outlined text-emerald-400">arrow_back_ios</span>
            Luander
          <span className="material-symbols-outlined text-emerald-400">arrow_forward_ios</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
          <button className="bg-emerald-600 py-2 px-4 rounded-full text-gray-50 flex flex-col hover:bg-emerald-700 transition-all disabled:opacity-50">
            <a href="https://drive.google.com/drive/folders/1TurqkwxSe8DTcS5TTQhFMoRJLMQYJiSj?usp=sharing" target="_blank">Download CV</a>
          </button>
        </nav>
      </div>
    </motion.header>
  )
}
