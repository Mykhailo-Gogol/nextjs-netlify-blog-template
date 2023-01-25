import { getProduct } from '@/api/controllers'

export default async function ProductById({ params: { id } }: any) {
  const post = await getProduct(id)
  return <div>{JSON.stringify(post, null, 2)}</div>
}
