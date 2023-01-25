import { getProducts, getProduct } from '@/api/controllers'

export async function generateStaticParams() {
  const products = await getProducts()

  return products.map((product) => ({
    id: product.sys.id,
  }))
}

export default async function ProductById({ params: { id } }: any) {
  const product = await getProduct(id)

  return <div>{product && JSON.stringify(product, null, 2)}</div>
}
