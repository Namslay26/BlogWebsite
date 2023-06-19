import Link from 'next/link'
import getPostData from '../components/getPostData'
import PostPreview from '../components/PostPreview';
import Hero from '../components/Hero';

export default function Home() {
  const metadata = getPostData();
  const postPreview = metadata.map((post)=>{
    return (
      <PostPreview key={post.nameofpost} {...post}></PostPreview>
          )
  })
  return (
    <div>
      <Hero></Hero> 
      <h1 className='px-10 py-5 font-bold text-5xl'>Blogs</h1>
      <div className=' grid grid-cols-1 gap-3 md:grid-cols-2 px-10 py-10'>
        {postPreview}
      </div>
    </div>
  )
}