import Image from 'next/image'
import Link from 'next/link';

const shimmer =
  'before:absolute before:inset-0 before:z-20 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:from-20% before:via-white/60 before:via-50% hover:before:animate-shimmer';

export default function Card({
  bgColor,
  imgSrc,
  imgAlt,
  title,
  subTitle,
} : {
  bgColor: string,
  imgSrc: string,
  imgAlt: string,
  title: string,
  subTitle: string,
}) {
  return (
      <article className={`${shimmer} aspect-[6/5] relative overflow-hidden hover:cursor-pointer transition-all duration-500 hover:shadow-lg hover:shadow-gray-400`}>
        <div className={ bgColor }>
          <Image
            src={ imgSrc }
            width={1024}
            height={853.33}
            alt={ imgAlt }
          />
        </div>
        <div className='flex items-center absolute left-0 bottom-0 z-10 right-0 h-14 w-full bg-dusk_blue-600 text-white'>
          <div className='px-2'>
            <p className='font-semibold'>{ title }</p>
            <p className='text-xs'>{ subTitle }</p>
          </div>
        </div>
      </article>
  )
}