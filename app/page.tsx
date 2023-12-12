import Link from "next/link";
import { getProjects } from "./utils/mdxUtils";
import Card from "./ui/card";


export default function Home() {

  let allProjects = getProjects();

  return (
    <div className='flex flex-col min-h-screen px-24 py-6'>
      <header>
        <ul className='flex justify-end gap-4 text-sm font-semibold text-dusk_blue-600'>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Download CV</li>
        </ul>
        <div className='sm:px-12 pt-24 pb-12 flex flex-col gap-4 sm:flex-row sm:justify-between text-dusk_blue-600'>
          <div>
            <h1 className='mb-2'>Hello,</h1>
            <h1 className='font-bold'>I am Na Zhao.</h1>
          </div>
          <p className='sm:w-1/2 text-sm'>I am an independent developer.
            I enjoy web development and working with new technologies.
            You can find a collection of my projects below.
          </p>
        </div>
      </header>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          allProjects.map(project => (
            <Link 
              key={ project.slug }
              href={`projects/${project.slug}`}
            >
              <Card bgColor="bg-dusk_blue-300" imgSrc={ project.metadata.image } imgAlt={ project.metadata.title }
                title={ project.metadata.title } subTitle={ project.metadata.subTitle }/>
            </Link>
          ))
        }
        {/* <Card bgColor="bg-dusk_blue-300" imgSrc="/projects/orbittalk_1.png" imgAlt="Screenshots of Orbittalk app"
              title="Orbit Talk" subTitle="A web chat app"/>

        <Card bgColor="bg-dusk_blue-400" imgSrc="/projects/journal_1.png" imgAlt="Screenshots of A Developer's Journal app"
              title="A Developer's Journal" subTitle="A personal blog"/>

        <Card bgColor="bg-dusk_blue-300" imgSrc="/projects/waldo_1.png" imgAlt="Screenshots of Where's Waldo"
              title="Where's Waldo" subTitle="An online characters finding game"/> */}
      </main>
      {/* <footer className='mt-auto'>footer</footer> */}
    </div>
  )
}
