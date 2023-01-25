import './review.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { Entry } from 'contentful'
import { ReviewType } from '@/api/contentfulTypes'

type ReviewPropsType = { review: Entry<ReviewType> }

export const Review = ({ review }: ReviewPropsType) => {
  const rates = new Array(review.fields.points).fill('star')

  return (
    <div className="app-review">
      <h1 className="app-review__title">{review.fields.title}</h1>
      <h2 className="app-review__author">{review.fields.author}</h2>
      <p className="app-review__description">{review.fields.description}</p>
      <div className="app-review__points">
        {rates.map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
      </div>

      {/* <pre>{JSON.stringify(review, null, 2)}</pre> */}
    </div>
  )
}
