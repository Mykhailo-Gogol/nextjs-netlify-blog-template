import './page.css'

import client from '@/api/contentful'
import {
  ContentType,
  PostType,
  LeadingType,
  ProductType,
  ReviewType,
} from '@/api/contentfulTypes'

import { Post } from '@/components/Post'
import { Leading } from '@/components/Leading'
import { Product } from '@/components/Product'
import { Review } from '@/components/Review'

async function getPosts() {
  const posts = await client.getEntries<PostType>({
    content_type: ContentType.POST,
  })
  return posts.items
}

async function getLeading() {
  const leading = await client.getEntries<LeadingType>({
    content_type: ContentType.LEADING,
  })
  return leading.items
}

async function getProducts() {
  const products = await client.getEntries<ProductType>({
    content_type: ContentType.PRODUCT,
  })
  return products.items
}

async function getReviews() {
  const reviews = await client.getEntries<ReviewType>({
    content_type: ContentType.REVIEW,
  })
  return reviews.items
}

export const revalidate = 60

export default async function Home() {
  const posts = await getPosts()
  const [leading] = await getLeading()
  const products = await getProducts()
  const reviews = await getReviews()

  return (
    <div className="app-wrapper">
      <Leading leading={leading} />

      <div className="app-wrapper__template products">
        {products.map((product) => (
          <Product key={product.sys.id} product={product} />
        ))}
      </div>
      <div className="app-wrapper__template posts">
        {posts.map((post) => (
          <Post key={post.sys.id} post={post} />
        ))}
      </div>
      <div className="app-wrapper__template reviews">
        {reviews.map((review) => (
          <Review key={review.sys.id} review={review} />
        ))}
      </div>
    </div>
  )
}
