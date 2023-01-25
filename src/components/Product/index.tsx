import './product.css'

import { Entry } from 'contentful'
import { ProductType } from '@/api/contentfulTypes'

import Image from 'next/image'
import Link from 'next/link'

type ProductPropsType = { product: Entry<ProductType> }

export const Product = ({ product }: ProductPropsType) => {
  const link = 'post/' + product.sys.id
  return (
    <Link href={link}>
      <div className="app-product">
        <Image
          key={product.fields.image.sys.id}
          src={'https:' + product.fields.image.fields.file.url}
          width={product.fields.image.fields.file.details.image?.width}
          height={product.fields.image.fields.file.details.image?.height}
          alt={product.fields.image.fields.title}
          className="app-product__image"
        />

        <div className="app-product__content">
          <h1 className="app-product__title">{product.fields.title}</h1>
          <p className="app-product__description">
            {product.fields.description}
          </p>
          <button className="app-product__cta">{product.fields.cta}</button>
        </div>

        {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
      </div>
    </Link>
  )
}
