import { notFound } from 'next/navigation'
import { getProjects } from "@/app/utils/mdxUtils";
import Link from 'next/link';
import { CustomMDX } from '@/app/components/mdx';
 

export default function Page({ params }: { params: { slug: string } }) {
  let project = getProjects().find(prj => prj.slug === params.slug);
  if (!project) {
    notFound()
  }
  return (
    <section>
      <div className="h-1/4 w-full mb-10 bg-dusk_blue-600 relative flex flex-col items-center justify-center text-white">
        <nav className="px-24 py-6 text-white text-sm self-start">
          <Link href={'/'}>
            { '<-- back' }
          </Link>
        </nav>
        <header className="w-1/3 mb-8">
          <h1 className="text-center mb-4">{ project.metadata.title }</h1>
          <h3 className="font-thin text-center"> { project.metadata.summary } </h3>
        </header>
        <ul className="flex gap-10 text-sm underline font-thin mb-6">
          <li>Github</li>
          <li>Website</li>
        </ul>
      </div>
      <div className="prose prose-slate prose-img:mx-auto mx-auto">
        <CustomMDX source={project.content} />
      </div>
    </section>
  )
}