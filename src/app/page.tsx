import './page.css'

import client from '../api/contentful'

import Image from 'next/image'

async function getData() {
  const res = await client.getEntries({
    content_type: 'post',
  })
  return res.items
}

export default async function Home() {
  const posts = await getData()

  return (
    <div className="app-wrapper">
      <h1 className="app-title">loggest</h1>
      {posts.map((post) => (
        <div className="app-post">
          <h1>{post.fields.title}</h1>
          {post.fields.image.map((image) => (
            <Image
              key={post.sys.id}
              src={'https:' + image.fields.file.url}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
            />
          ))}
        </div>
      ))}

      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}
