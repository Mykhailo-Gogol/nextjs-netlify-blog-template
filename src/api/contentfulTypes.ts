import { EntryFields, Asset } from 'contentful'

export type PostType = {
  image: Asset[]
  title: EntryFields.Text
  slug: EntryFields.Text
}

export enum ContentType {
  POST = 'post',
}
