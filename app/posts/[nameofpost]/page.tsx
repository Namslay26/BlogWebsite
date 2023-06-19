import React from 'react'
import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import graymatter from 'gray-matter'
import getPostData from '@/components/getPostData'
import path from 'path'

function getFileContent(nameofpost: string) {
    const folder = 'posts/'
    const file = `${folder}${nameofpost}.md`
    const content = fs.readFileSync(file,'utf-8')
    const metacontent = graymatter(content);
    return metacontent;
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
      slug: filename.replace('.md', '')
  }))

  return paths
}

/*
export const generateStaticParams = async () => {
  const posts = getPostData();
  return posts.map((post)=>{
    nameofpost: post.nameofpost
  })
}
*/

function PostPage(props:any) {
    const nameofpost = props.params.nameofpost;
    const allcontent = getFileContent(nameofpost);
  return (
    <div className='mt-20 max-w-screen-sm sm:max-w-screen-sm mx-auto'>
      <h2 className=' text-5xl font-black text-indigo-800'> {allcontent.data.title}</h2>
      <article className="prose md:prose-lg lg:prose-xl">
      <Markdown>{allcontent.content}</Markdown>
      </article>
    </div>
  )
}


export default PostPage