import { EntryFields, Asset } from 'contentful'

export type PostType = {
  image: Asset[]
  title: EntryFields.Text
  cta: EntryFields.Text
  slug: EntryFields.Text
}

export type LeadingType = {
  image: Asset[]
  title: EntryFields.Text
  subtitle: EntryFields.Text
  description: EntryFields.Text
  cta: EntryFields.Text
}

export type ProductType = {
  image: Asset
  title: EntryFields.Text
  description: EntryFields.Text
  cta: EntryFields.Text
  slug: EntryFields.Text
}

export type ReviewType = {
  title: EntryFields.Text
  author: EntryFields.Text
  description: EntryFields.Text
  points: EntryFields.Number
  slug: EntryFields.Text
}

export enum ContentType {
  POST = 'post',
  LEADING = 'leading',
  PRODUCT = 'product',
  REVIEW = 'review',
}
