import { getPosts, getPost } from '@/api/controllers'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    id: post.sys.id,
  }))
}

export default async function PostById({ params: { id } }: any) {
  const post = await getPost(id)

  return <div>{post && JSON.stringify(post, null, 2)}</div>
}
