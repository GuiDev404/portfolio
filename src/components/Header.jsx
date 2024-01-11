import React from 'react';
import { GithubIcon, LinkedinIcon, ArrowDown } from './Icons';
import profile from '../assets/images/profile_5.png'

const Header = ({ className, title, subtitle }) => {
  return (
    <header className='banner_bg shadow relative'>
      <div className='h-screen flex flex-col items-center justify-center gap-3'>
  
        <figure className='rounded-lg overflow-hidden border-4 border-white bg-stone-500'>
          <img
            src={profile}
            className='sm:w-56 sm:min-h-56 sm:h-56 w-40 min-h-40 h-40 object-cover'
          />
        </figure>
      

        <div className='text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            {title}
          </h1>
          <p className='text-2xl font-light text-gray-200'> {subtitle} </p>
        </div>
        
        <div className='flex justify-evenly gap-2 mt-5'>
          <a
            href='https://github.com/GuiDev404'
            target='_blank'
            className='text-neutral-400 hover:text-neutral-100 '
          >
            <GithubIcon width='30' height='30' />
          </a>
          <a
            href='https://www.linkedin.com/in/guido-rivoira-7510a8267/'
            rel='noopener noreferrer'
            target='_blank'
            className='text-neutral-400 hover:text-neutral-100 '
          >
            <LinkedinIcon width='30' height='30' />
          </a>
        </div>

        <a href="#sobre_mi" className='text-white animate-bounce absolute bottom-0'>
          <ArrowDown width={50} strokeWidth={1} height={50} />
        </a>
      </div>
    </header>
  );
};

export default Header;
