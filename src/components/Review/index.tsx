import './review.css'

import { Entry } from 'contentful'
import { ReviewType } from '@/api/contentfulTypes'

type ReviewPropsType = { review: Entry<ReviewType> }

export const Review = ({ review }: ReviewPropsType) => {
  return (
    <div className="app-review">
      <h1 className="app-review__title">{review.fields.title}</h1>
      <h2 className="app-review__author">{review.fields.author}</h2>
      <p className="app-review__description">{review.fields.description}</p>
      <span className="app-review__points">
        {review.fields.points} stars ***
      </span>

      {/* <pre>{JSON.stringify(review, null, 2)}</pre> */}
    </div>
  )
}
