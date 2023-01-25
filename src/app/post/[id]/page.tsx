import { getPost } from '@/api/controllers'

export default async function PostById({ params: { id } }: any) {
  const post = await getPost(id)
  return <div>{JSON.stringify(post, null, 2)}</div>
}
