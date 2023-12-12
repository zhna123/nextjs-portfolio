import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Metadata = {
  title: string;
  subTitle: string;
  summary: string;
  date: string;
  image: string;
}


const contentDirectory = path.join(process.cwd(), 'content');

export function getProjects() {
  const allProjectData = getMDXData(contentDirectory)
  return allProjectData.sort((a, b) => {
    if (a.metadata.date < b.metadata.date) {
      return 1
    } else {
      return -1
    }
  });
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map(file => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content
    }
  })
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  // parse frontmatter
  const matterResult = matter(rawContent);
  return { metadata: matterResult.data as Metadata, content: matterResult.content}
}

