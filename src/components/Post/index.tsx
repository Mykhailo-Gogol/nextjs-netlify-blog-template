import './post.css'

import { Entry } from 'contentful'
import { PostType } from '@/api/contentfulTypes'

import Image from 'next/image'

type PostPropsType = { post: Entry<PostType> }

export const Post = ({ post }: PostPropsType) => {
  return (
    <div className="app-post">
      <h1 className="app-post__title">{post.fields.title}</h1>
      {post.fields.cta ? (
        <button className="app-post__cta">{post.fields.cta}</button>
      ) : null}

      {post.fields.image.map((image) => (
        <Image
          key={image.sys.id}
          src={'https:' + image.fields.file.url}
          width={image.fields.file.details.image?.width}
          height={image.fields.file.details.image?.height}
          alt={image.fields.title}
          className="app-post__image"
        />
      ))}
    </div>
  )
}
