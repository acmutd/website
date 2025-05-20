'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const navigation = [
  { name: 'about', href: '/about', current: true },
  { name: 'officers', href: '/officers', current: false },
  { name: 'apply', href: '/apply', current: false },
  { name: 'events', href: '/events', current: false },
  { name: 'connect', href: '/connect', current: false },
];

const divisions = [
  { name: 'Media', href: '/media' },
  { name: 'Research', href: '/research' },
  { name: 'Development', href: '/development' },
  { name: 'Projects', href: '/projects' },
  { name: 'Education - TIP', href: '/education/tip' },
  { name: 'Education - Mentor', href: '/education/mentor' },
  { name: 'Community', href: '/community' },
  { name: 'HackUTD', href: '/hackutd' },
  { name: 'Industry', href: '/industry' },
];

export default function Navbar() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navStyles = top ? 'md:bg-opacity-0 md:bg-none bg-black/70' : 'bg-black bg-opacity-70 backdrop-blur-xl';
  return (
    <Disclosure
      as="nav"
      className={`fixed z-50 w-full transition duration-200 ease-in ${navStyles}`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-primary hover:bg-primaryDark/30 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-10 w-auto"
                    src="/assets/chapter-logo.png"
                    alt="Your Company"
                    width={405}
                    height={114}
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-10 items-center py-2">
                    {navigation.map((item) => (
                      item.name === 'about' ? (
                        <HoverCard key={item.name} openDelay={10}>
                          <HoverCardTrigger asChild className="text-lg font-semibold text-primary hover:text-primary/80 cursor-pointer">
                            <Link href={item.href}>{item.name}</Link>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-48 p-2 bg-black/70 backdrop-blur-xl border-primary/20 z-50">
                            <div className="flex flex-col space-y-1">
                              {divisions.map((division) => (
                                <Link
                                  key={division.name}
                                  href={division.href}
                                  className="px-2 py-1.5 text-primary hover:bg-primaryDark/30 rounded-md duration-200 hover:translate-x-1 hover:pl-3 transition-all"
                                >
                                  {division.name}
                                </Link>
                              ))}
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-lg font-semibold text-primary"
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-primaryDark/30 hover:text-primary"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
