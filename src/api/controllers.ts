import client from './contentful'

import {
  ContentType,
  LeadingType,
  PostType,
  ProductType,
  ReviewType,
} from './contentfulTypes'

export async function getPosts() {
  const posts = await client.getEntries<PostType>({
    content_type: ContentType.POST,
  })
  return posts.items
}

export async function getPost(id: string) {
  const posts = await client.getEntry<PostType>(id)
  return posts.fields
}

export async function getLeading() {
  const leading = await client.getEntries<LeadingType>({
    content_type: ContentType.LEADING,
  })
  return leading.items
}

export async function getProducts() {
  const products = await client.getEntries<ProductType>({
    content_type: ContentType.PRODUCT,
  })
  return products.items
}

export async function getProduct(id: string) {
  const product = await client.getEntry<ProductType>(id)
  return product.fields
}

export async function getReviews() {
  const reviews = await client.getEntries<ReviewType>({
    content_type: ContentType.REVIEW,
  })
  return reviews.items
}
