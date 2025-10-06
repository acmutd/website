'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

type NavigationItem = {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
};

type SubmenuItem = {
  name: string;
  href: string;
  submenu?: DivisionItem[];
};

type DivisionItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  {
    name: 'about',
    href: '/about',
    submenu: [
      { name: 'About Us', href: '/about' },
      {
        name: 'Divisions',
        href: '/about#divisions',
        submenu: [
          { name: 'Media', href: '/media' },
          { name: 'Research', href: '/research' },
          { name: 'Development', href: '/development' },
          { name: 'Projects', href: '/projects' },
          { name: 'Education - TIP', href: '/education/tip' },
          { name: 'Education - Mentor', href: '/education/mentor' },
          { name: 'Community', href: '/community' },
          { name: 'HackUTD', href: '/hackutd' },
          { name: 'Industry', href: '/industry' },
        ],
      },
      { name: 'Our Journey', href: '/about#our-journey' },
    ],
  },
  { name: 'officers', href: '/officers' },
  { name: 'apply', href: '/apply' },
  { name: 'events', href: '/events' },
  { name: 'sponsors', href: '/sponsors' },
  { name: 'connect', href: '/connect' },
];

export default function Navbar() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navStyles = top
    ? 'md:bg-opacity-0 md:bg-none bg-black/70 md:shadow-none shadow-lg md:backdrop-blur-none backdrop-blur-sm'
    : 'bg-black/80 backdrop-blur-xl border-b border-primary/10 shadow-2xl shadow-black/20 backdrop-saturate-150';

  return (
    <Disclosure
      as="nav"
      className={`fixed z-50 w-full transition-all duration-300 ease-out ${navStyles}`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div
              className={`relative flex items-center justify-between transition-all duration-300 ${
                top ? 'h-16' : 'h-14'
              }`}
            >
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-lg p-2 text-primary transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black/50">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 transition-transform duration-200 group-hover:rotate-90"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 transition-transform duration-200 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <Link
                  href="/"
                  className="group flex flex-shrink-0 items-center transition-transform duration-200 hover:scale-105"
                >
                  <div className="relative">
                    <Image
                      className={`w-auto transition-all duration-200 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${
                        top ? 'h-10' : 'h-8'
                      }`}
                      src="/assets/chapter-logo.png"
                      alt="ACM Logo"
                      width={405}
                      height={114}
                    />
                  </div>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <NavigationMenu>
                    <NavigationMenuList className="space-x-2">
                      {navigation.map((item) => (
                        <NavigationMenuItem key={item.name}>
                          {item.submenu ? (
                            <>
                              <NavigationMenuTrigger
                                className={cn(
                                  navigationMenuTriggerStyle(),
                                  'group relative w-full rounded-lg bg-transparent px-4 py-2 text-lg font-semibold text-primary duration-200 hover:scale-105 hover:text-primary data-[state=open]:scale-105 data-[state=open]:bg-gradient-to-r data-[state=open]:from-primary/20 data-[state=open]:to-primary/10 data-[state=open]:text-primary',
                                )}
                              >
                                <Link href={item.href} className="relative">
                                  {item.name}
                                </Link>
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <div className="grid w-80 gap-3 rounded-xl border border-primary/20 bg-black/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl duration-200 animate-in slide-in-from-top-2">
                                  {item.submenu.map((submenuItem) => (
                                    <div key={submenuItem.name}>
                                      {submenuItem.submenu ? (
                                        <div>
                                          <div className="mb-2 border-b border-primary/10 px-2 py-1 text-sm font-semibold text-primary/90">
                                            {submenuItem.name}
                                          </div>
                                          <div className="grid w-full grid-cols-2 gap-1">
                                            {submenuItem.submenu.map((division) => (
                                              <NavigationMenuLink key={division.name} asChild>
                                                <Link
                                                  href={division.href}
                                                  className="group block rounded-lg px-2 py-1.5 text-sm text-primary/80 transition-all duration-200 hover:translate-x-1 hover:scale-105 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary/5 hover:text-primary"
                                                >
                                                  <span className="relative">{division.name}</span>
                                                </Link>
                                              </NavigationMenuLink>
                                            ))}
                                          </div>
                                        </div>
                                      ) : (
                                        <NavigationMenuLink asChild>
                                          <Link
                                            href={submenuItem.href}
                                            className="group block rounded-lg px-2 py-2 text-base font-medium text-primary transition-all duration-200 hover:translate-x-1 hover:scale-105 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary/5 hover:pl-3 hover:text-primary"
                                          >
                                            <span className="relative">{submenuItem.name}</span>
                                          </Link>
                                        </NavigationMenuLink>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </NavigationMenuContent>
                            </>
                          ) : (
                            <Link
                              href={item.href!}
                              className={cn(
                                navigationMenuTriggerStyle(),
                                'group relative rounded-lg bg-transparent px-4 py-2 text-lg font-semibold text-primary transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary/5 hover:text-primary focus:scale-105 focus:bg-gradient-to-r focus:from-primary/20 focus:to-primary/10 focus:text-primary focus:outline-none',
                              )}
                            >
                              <span className="relative">{item.name}</span>
                            </Link>
                          )}
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="duration-200 animate-in slide-in-from-top-2 sm:hidden">
            <div className="space-y-1 border-t border-primary/10 bg-black/90 px-2 pb-3 pt-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <div className="block rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 px-3 py-2 text-base font-medium text-primary">
                        {item.name}
                      </div>
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((submenuItem) => (
                          <div key={submenuItem.name}>
                            {submenuItem.submenu ? (
                              <>
                                <div className="border-b border-primary/10 px-3 py-1.5 text-sm font-medium text-primary/90">
                                  {submenuItem.name}
                                </div>
                                <div className="ml-4 space-y-1">
                                  {submenuItem.submenu.map((division) => (
                                    <Disclosure.Button
                                      key={division.name}
                                      as={Link}
                                      href={division.href}
                                      className="group block rounded-lg px-3 py-1 text-xs font-medium text-primary/70 transition-all duration-200 hover:translate-x-1 hover:scale-105 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary/5 hover:text-primary"
                                    >
                                      <span className="relative">{division.name}</span>
                                    </Disclosure.Button>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Disclosure.Button
                                as={Link}
                                href={submenuItem.href!}
                                className="group block rounded-lg px-3 py-1.5 text-sm font-medium text-primary/80 transition-all duration-200 hover:translate-x-1 hover:scale-105 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary/5 hover:text-primary"
                              >
                                <span className="relative">{submenuItem.name}</span>
                              </Disclosure.Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Disclosure.Button
                      as={Link}
                      href={item.href!}
                      className="group block rounded-lg px-3 py-2 text-base font-medium text-primary transition-all duration-200 hover:translate-x-1 hover:scale-105 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary/5 hover:text-primary"
                    >
                      <span className="relative">{item.name}</span>
                    </Disclosure.Button>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
