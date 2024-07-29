import Image from 'next/image';
import Link from 'next/link';
import { NavItem } from './nav-item';

const NAV_ITEMS = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projetos',
      href: '/projects',
    },
  ]

export const Header = () => {
    return (
        <>
            <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
                <div className="container flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <span className="material-symbols-outlined text-emerald-400">arrow_back_ios</span>
                            Luander
                        <span className="material-symbols-outlined text-emerald-400">arrow_forward_ios</span>
                    </Link>
                    <nav className="flex items-center gap-4 sm:gap-10">
                        {NAV_ITEMS.map((item) => (
                            <NavItem {...item} key={item.label} />
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}