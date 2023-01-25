import { getProduct } from '@/api/controllers'

export default async function ProductById({ params: { id } }: any) {
  const product = await getProduct(id)
  return <div>{product && JSON.stringify(product, null, 2)}</div>
}
