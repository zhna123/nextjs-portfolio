import Link from "next/link";
import { getProjects } from "./utils/mdxUtils";
import Card from "./ui/card";
import Image from 'next/image'


export default function Home() {

  let allProjects = getProjects();

  return (
    <div className='flex flex-col min-h-screen px-6 sm:px-24 py-6'>
      <header>
        <ul className='flex justify-center flex-wrap gap-2 sm:justify-end sm:gap-4 text-xs font-sans font-bold text-port_blue'>
          <li>
            <a target="_blank" href="https://github.com/zhna123" rel="noopener noreferrer">
              <div className="flex gap-1 items-center">
                <span>Github</span>
                <Image className="inline-block" alt="open new tab icon" src="/open_in_new.svg" width="15" height="15" />
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/na-zhao-956b7329/" rel="noopener noreferrer">
              <div className="flex gap-1 items-center">
                <span>LinkedIn</span>
                <Image className="inline-block" alt="open new tab icon" src="/open_in_new.svg" width="15" height="15" />
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://nazhao.myportfolio.com/" rel="noopener noreferrer">
              <div className="flex gap-1 items-center">
                <span>UX Work</span>
                <Image className="inline-block" alt="open new tab icon" src="/open_in_new.svg" width="15" height="15" />
              </div>
            </a>
          </li>
          <li>
            {/* <a target="_blank" href="/data/resume_Na_Zhao.pdf" rel="noopener noreferrer"> */}
              <div className="flex gap-1 items-center">
                <span>Download CV</span>
                <Image className="inline-block" alt="download icon" src="/download.svg" width="20" height="20" />
              </div>
            {/* </a> */}
          </li>
        </ul>
        <div className='sm:px-12 pt-24 pb-12 flex flex-col gap-4 sm:flex-row sm:justify-between text-port_gray'>
          <div className="font-serif">
            <h1 className='mb-2'>Hello,</h1>
            <h1 className='font-bold'>I am Na Zhao.</h1>
          </div>
          <p className='font-sans font-medium sm:w-1/2 text-sm'>I am an independent developer.
            You can find a collection of my projects here.
          </p>
        </div>
      </header>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          allProjects.map((project, index) => (
            <Link 
              key={ project.slug }
              href={`projects/${project.slug}`}
            >
              <Card index={index} imgSrc={ project.metadata.image } imgAlt={ project.metadata.title }
                title={ project.metadata.title } subTitle={ project.metadata.subTitle }/>
            </Link>
          ))
        }
      </main>
      <hr className="my-14" />
      <footer className='mt-auto font-sans flex flex-col items-center'>
        <small className="text-center">This portfolio website is developed with Next.js and MDX</small>
        <small className="text-port_blue underline mb-4">
          <a target="_blank" href="https://github.com/zhna123/nextjs-portfolio" rel="noopener noreferrer">Click here to see source code &#x2197;</a>
        </small>
        <small className="">&copy; {new Date().getFullYear()} zhna123</small>
      </footer>
    </div>
  )
}
