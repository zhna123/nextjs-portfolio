import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'

function ScreenshotImage(props: any) {
  return <Image alt={props.alt} className='border mb-10' {...props} />
}

const components = {
  // h1: (props) => (
  //   <h1 {...props} className="large-text">
  //     {props.children}
  //   </h1>
  // ),
  Image: ScreenshotImage,
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
