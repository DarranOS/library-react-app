import ReviewItem from './ReviewItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import Spinner from './shared/Spinner'

function ReviewList() {
  const { reviews, isLoading } = useContext(ReviewContext)

  if (!isLoading && (!reviews || reviews.length === 0)) {
    return <p>No Reviews Yet</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="review-list">
      <AnimatePresence>
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ReviewItem key={review.id} review={review} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ReviewList
