import Link from "next/link";
import { getProjects } from "./utils/mdxUtils";
import Card from "./ui/card";


export default function Home() {

  let allProjects = getProjects();

  return (
    <div className='flex flex-col min-h-screen px-24 py-6'>
      <header>
        <ul className='flex justify-end gap-4 text-xs font-semibold text-dusk_blue-600'>
          <li>
            <a target="_blank" href="https://github.com/zhna123" rel="noopener noreferrer">
              <div className="flex gap-1 items-center">
                <span>Github</span>
                <img className="inline-block" alt="open new tab icon" src="/open_in_new.svg" width="15" height="15" />
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/na-zhao-956b7329/" rel="noopener noreferrer">
              <div className="flex gap-1 items-center">
                <span>LinkedIn</span>
                <img className="inline-block" alt="open new tab icon" src="/open_in_new.svg" width="15" height="15" />
              </div>
            </a>
          </li>
          <li>
            <div className="flex gap-1 items-center">
              <span>Download CV</span>
              <img className="inline-block" alt="download icon" src="/download.svg" width="20" height="20" />
            </div>
          </li>
        </ul>
        <div className='sm:px-12 pt-24 pb-12 flex flex-col gap-4 sm:flex-row sm:justify-between text-dusk_blue-600'>
          <div>
            <h1 className='mb-2'>Hello,</h1>
            <h1 className='font-bold'>I am Na Zhao.</h1>
          </div>
          <p className='sm:w-1/2 text-sm'>I am an independent web developer.
            I enjoy making web apps. You can find a collection of my recent personal projects below.
          </p>
        </div>
      </header>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
      {/* <footer className='mt-auto'>footer</footer> */}
    </div>
  )
}
