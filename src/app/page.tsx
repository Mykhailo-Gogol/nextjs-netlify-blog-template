import './page.css'

import client from '@/api/contentful'
import { ContentType, PostType } from '@/api/contentfulTypes'

import { Post } from '@/components/Post'

async function getData() {
  const res = await client.getEntries<PostType>({
    content_type: ContentType.POST,
  })
  return res.items
}
export const revalidate = 60

export default async function Home() {
  const posts = await getData()

  return (
    <div className="app-wrapper">
      <div className="app-posts">
        {posts.map((post) => (
          <Post key={post.sys.id} post={post} />
        ))}
      </div>
    </div>
  )
}
