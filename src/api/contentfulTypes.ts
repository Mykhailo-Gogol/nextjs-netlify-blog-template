import { EntryFields, Asset, EntryCollection } from 'contentful'

export type TPost = {
  image: Asset
  title: EntryFields.Text
  slug: EntryFields.Text
}

export type TPosts = EntryCollection<TPost>
