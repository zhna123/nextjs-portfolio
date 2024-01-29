import clsx from 'clsx';
import Image from 'next/image'

// const shimmer =
//   'before:absolute before:inset-0 before:z-20 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:from-20% before:via-white/60 before:via-50% hover:before:animate-shimmer';

export default function Card({
  index,
  imgSrc,
  imgAlt,
  title,
  subTitle,
} : {
  index: number,
  imgSrc: string,
  imgAlt: string,
  title: string,
  subTitle: string,
}) {
  return (
      <article className='font-sans group mb-4 aspect-[6/5] relative overflow-hidden hover:cursor-pointer rounded-md drop-shadow'>
        <div className={clsx(
          'group-hover:opacity-30 transition-all duration-500 ease-in-out bg-port_light_gray',
          {
          // 'bg-port_gray': index%2 == 0,
          // 'bg-gray-300': index%2 != 0,
          })}>
          <Image
            src={ imgSrc }
            width={1024}
            height={853.33}
            alt={ imgAlt }
          />
        </div>
        <div className='flex items-center absolute left-0 bottom-0 z-10 right-0 h-16 w-ful bg-port_blue text-port_white group-hover:opacity-0 transition-all duration-500 ease-in-out'>
          <div className='px-3'>
            <p className='text-sm font-medium pb-1'>{ title }</p>
            <p className='text-xs font-light'>{ subTitle }</p>
          </div>
        </div>
        <div className='opacity-0 group-hover:opacity-100 bg-port_blue rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 ease-in-out'>
          <div className='text-port_white text-sm font-medium py-2 px-4'>{ title }</div>
        </div>
      </article>
  )
}