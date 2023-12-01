/* eslint-disable @next/next/no-img-element */
'use client';

import react, { useState, Fragment } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { Popover, Dialog, Disclosure, Transition } from '@headlessui/react';
import { FaChevronDown, FaBook, FaMountainSun, FaUber, FaLyft } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiMicrophoneStage } from "react-icons/pi";
import { IoTrainSharp } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { PiPark } from "react-icons/pi";

const bookings = [
  {
    title: 'Book a Room',
    description: 'Find the best rates on lodging',
    link: '#',
    icon: RiHotelFill,
  },
  {
    title: 'Book a flight',
    description: 'Find the best deals on flights',
    link: '#',
    icon: GiCommercialAirplane,
  },
  {
    title: 'Rent a Car',
    description: 'Find the hottest deals car rentals',
    link: '#',
    icon: IoCarSportSharp,
  },
]

const attractions = [
  {
    title: 'Find a Concert',
    description: 'Book a live music event',
    link: '#',
    icon: PiMicrophoneStage,
  },
  {
    title: 'Explore the Outdoors',
    description: 'Find outdoor attractions',
    link: '#',
    icon: FaMountainSun,
  },
  {
    title: 'Ammusement Parks',
    description: 'Explore parks and other urban recreation',
    link: '#',
    icon: PiPark,
  },
]

const rides = [
  {
    title: 'Catch a Train',
    description: 'Book a train pass',
    link: '#',
    icon: IoTrainSharp,
  },
  {
    title: 'Find a Bus',
    description: 'Explore bus routes and pre-book a ticket',
    link: '#',
    icon: FaBusAlt,
  },
  {
    title: 'Uber',
    description: 'Pre-book a ride with Uber',
    link: '#',
    icon: FaUber,
  },
  {
    title: 'Lyft',
    description: 'Pre-book a ride with Lyft',
    link: '#',
    icon: FaLyft,
  },
  {
    title: 'Taxi',
    description: 'Pre-book a ride with a local taxi service',
    link: '#',
    icon: BsFillTaxiFrontFill,
  },
]

const CTA = [
  { title: 'See Demo Booking', link: '#', icon: FaBook },
  { title: 'Contact a Booking Agent', link: '#', icon: MdOutlineSupportAgent }
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-green-700">
      <nav
        className="mx-auto flex max-w-7xl- items-center lg:justify-start lg:space-x-8 justify-between py-3 px-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo Home Button  */}
        <div className="flex lg-flex-1">
          <Link href="/" className="p-1 flex space-x-2 items-center">
            <img className="h-12 w-auto" src="/Logo.png" alt="Logo Image" />
            <span className="text-2xl text-golden-500 min-w-max">Travel Pass</span>
          </Link>
        </div>

        {/* Mobile Menu  */}
        <div className='flex lg:hidden'>
          <button type='button' className='inline-flex items-center justify-center rounded-md p-2 text-slate-200' onClick={() => setMobileMenuOpen(true)}>
            <span className='sr-only'>Open Main Menu</span>
            <GiHamburgerMenu className='h-6 w-6' aria-hidden='true'/>
          </button>
        </div>

        {/* Popovers  */}
        <Popover.Group className='hidden lg:flex lg:gap-x-12 justify-center w-full'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-sand-200 p-2'>
              Travel Bookings
              <FaChevronDown className='h-5 w-5 flex-none text-sand-300' aria-hidden='true'/>
            </Popover.Button>
            <Transition as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'              
            >
              <Popover.Panel className='absolute bg-sand-200 -left-42 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-golden-400/70 shadow-fire-700/60 p-3'>
                <div>
                  {bookings.map((item) => (
                    <div key={item.title} className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-sun-300/60 hover:border hover:border-fire-500/70 hover:shadow-md'> 
                      <item.icon aria-hidden='true' className='h-6 w-6 text-sun-700'/>
                      <div className='flex-auto'>
                        <a className='block font-semibold text-sun-500' href={item.link}>
                        {item.title}
                        <span className='absolute inset-0'/>
                        </a>
                      <p className='mt-1 text-sun-800'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex divide-x divide-slate-800 bg-sand-400 rounded-lg px-1 py-2'>
                  {CTA.map((item) => (
                    <a
                      href={item.link}
                      key={item.title}
                      className='mr-2 font-semibold leading-6'
                    >
                      <div className='gap-x-2 hover:bg-fire-400/60 hover:border flex items-center justify-center hover:border-sun-500/70 hover:shadow-md rounded-md p-3 mx-1 w-full'>

                      <item.icon
                        className='h5-w-6 flex-none text-fire-700' aria-hidden='true'
                        />
                      <p className='text-sm'>
                        
                        {item.title}
                        </p>
                        </div>
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-sand-200 p-2'>
              Attractions
              <FaChevronDown className='h-5 w-5 flex-none text-sand-300' aria-hidden='true'/>
            </Popover.Button>
            <Transition as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'              
            >
              <Popover.Panel className='absolute bg-sand-200 -left-42 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-golden-400/70 shadow-fire-700/60 p-3'>
                <div>
                  {attractions.map((item) => (
                    <div key={item.title} className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-sun-300/60 hover:border hover:border-fire-500/70 hover:shadow-md'> 
                      <item.icon aria-hidden='true' className='h-6 w-6 text-sun-700'/>
                      <div className='flex-auto'>
                        <a className='block font-semibold text-sun-500' href={item.link}>
                        {item.title}
                        <span className='absolute inset-0'/>
                        </a>
                      <p className='mt-1 text-sun-800'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-sand-200 p-2'>
              Get a Ride
              <FaChevronDown className='h-5 w-5 flex-none text-sand-300' aria-hidden='true'/>
            </Popover.Button>
            <Transition as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'              
            >
              <Popover.Panel className='absolute bg-sand-200 -left-42 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-golden-400/70 shadow-fire-700/60 p-3'>
                <div>
                  {rides.map((item) => (
                    <div key={item.title} className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-sun-300/60 hover:border hover:border-fire-500/70 hover:shadow-md'> 
                      <item.icon aria-hidden='true' className='h-6 w-6 text-sun-700'/>
                      <div className='flex-auto'>
                        <a className='block font-semibold text-sun-500' href={item.link}>
                        {item.title}
                        <span className='absolute inset-0'/>
                        </a>
                      <p className='mt-1 text-sun-800'>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>

        {/* Account  */}
        <div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
