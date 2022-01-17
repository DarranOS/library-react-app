import React from 'react'
import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'

function ReviewStats() {
  const { reviews } = useContext(ReviewContext)
  let average =
    reviews.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / reviews.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="reviews-stats d-flex justify-content-between text-light mt-3">
      <p>{reviews.length} reviews</p>
      <p>Average Rating: {isNaN(average) ? '0' : average} </p>
    </div>
  )
}

export default ReviewStats
