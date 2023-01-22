import './leading.css'

import { Entry } from 'contentful'
import { LeadingType } from '@/api/contentfulTypes'

import Image from 'next/image'

type LeadingPropsType = { leading: Entry<LeadingType> }

export const Leading = ({ leading }: LeadingPropsType) => {
  return (
    <div className="app-leading">
      <div className="app-leading__content">
        <h1 className="app-leading__title">{leading.fields.title}</h1>
        <h2 className="app-leading__subtitle">{leading.fields.subtitle}</h2>
        <p className="app-leading__description">{leading.fields.description}</p>
        {leading.fields.cta ? (
          <button className="app-leading__cta">{leading.fields.cta}</button>
        ) : null}
      </div>

      {leading.fields.image.map((image) => (
        <Image
          key={image.sys.id}
          src={'https:' + image.fields.file.url}
          width={image.fields.file.details.image?.width}
          height={image.fields.file.details.image?.height}
          alt={image.fields.title}
          className="app-leading__image"
        />
      ))}

      {/* <pre>{JSON.stringify(leading, null, 2)}</pre> */}
    </div>
  )
}
