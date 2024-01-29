import { notFound } from 'next/navigation'
import { getProjects } from "@/app/utils/mdxUtils";
import Link from 'next/link';
import { CustomMDX } from '@/app/components/mdx';
import clsx from 'clsx';
import { urls } from '@/app/utils/dataUtils';
 

export default function Page({ params }: { params: { slug: string } }) {
  let project = getProjects().find(prj => prj.slug === params.slug);
  if (!project) {
    notFound()
  }
  const WebsiteComponent = () => {
    if (urls[params.slug] !== undefined) {
      return <a href={urls[params.slug]} target='_blank' rel='noopener noreferrer'>Website &#x2197;</a>
    } 
    return "Website"
  }
  return (
    <section className='mb-12 font-sans'>
      <div className="h-1/4 w-full mb-10 bg-port_blue relative flex flex-col items-center justify-center text-port_white">
        <nav className="px-24 py-6 font-semibold self-start">
          <Link href={'/'}>
            &#8592; Back
          </Link>
        </nav>
        <header className="w-1/3 mb-8">
          <h1 className="text-center mb-4">{ project.metadata.title }</h1>
          <div className="font-extralight text-center"> { project.metadata.summary } </div>
        </header>
        <ul className="flex gap-10 text-sm font-extralight mb-6">
          <li className='underline'><a href={`https://github.com/zhna123/${params.slug}`} target='_blank' rel='noopener noreferrer'>Github &#x2197;</a></li>
          <li className={clsx({
            'underline': urls[params.slug] !== undefined,
          })}>
            <WebsiteComponent />
          </li>
        </ul>
      </div>
      <div className="prose prose-slate prose-img:mx-auto mx-auto">
        <CustomMDX source={project.content} />
      </div>
    </section>
  )
}