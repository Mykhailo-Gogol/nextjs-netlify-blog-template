import './page.css'

import { Post } from '@/components/Post'
import { Leading } from '@/components/Leading'
import { Product } from '@/components/Product'
import { Review } from '@/components/Review'

import {
  getPosts,
  getLeading,
  getProducts,
  getReviews,
} from '@/api/controllers'

export const revalidate = 3600

export default async function Home() {
  const posts = await getPosts()
  const [leading] = await getLeading()
  const products = await getProducts()
  const reviews = await getReviews()

  return (
    <div className="app-wrapper">
      <div className="app-wrapper__template leading">
        <Leading leading={leading} />
      </div>

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
