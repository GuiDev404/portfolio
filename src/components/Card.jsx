import React from 'react';
import { GithubIcon, LinkExternalIcon } from './Icons';
import ImgZoomeable from './ImgZoomeable';
import ListOfTags from './ListOfTags';

function Card({ img, title, description, tags, links }) {
 
  return (
    <div className='break-inside-avoid mb-4 bg-zinc-800'>
      <div className='flex flex-col rounded-0 border-0'>
        <ImgZoomeable>
          <img
            src={img}
            loading='lazy'
            alt='vista previa de uGiffy'
            className='card-img-top rounded-0'
          />
        </ImgZoomeable>
        <div className='p-4 text-dark'>
          <span className='text-xl mb-1 font-bold py-1 block'> {title} </span>
          <p className='text-zinc-200'> {description} </p>

          <div className='mt-3 flex gap-x-4 items-center'>
            {links[0] &&
              <a
                href={`${links[0]}`}
                className='text-sm flex items-center gap-x-2 hover:underline'
                target='_blank'
              >
                <GithubIcon width='14' />
                Ver codigo
              </a>
            }
           {links[1] && <a
              href={`${links[1]}`}
              className='text-sm flex items-center gap-x-2 hover:underline'
              target='_blank'
            >
              <LinkExternalIcon width='13' />
              Ver proyecto
            </a>}
          </div>
        </div>
        {/* bg-zinc-900 bg-opacity-20 border-t-[1px] border-neutral-700 */}
        <div className='p-4'>
          <ListOfTags
            className='justify-start gap-1 flex-wrap text-start'
            tagClassname='text-xs bg-zinc-900 rounded-0  inline-block py-1 px-2'
            tags={tags}
          />
        </div>
      </div>
    </div>
  );
}

export default Card
