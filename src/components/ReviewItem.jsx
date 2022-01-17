// import { useState } from 'react'
// import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import { Card, Button, Badge } from 'react-bootstrap'

function ReviewItem({ review }) {
  const { deleteReview, editReview } = useContext(ReviewContext)

  return (
    <Card border="danger" className="my-4">
      <Badge
        bg="primary"
        className="num-display text-light"
        style={{
          position: 'absolute',
          top: '-1rem',
          left: '-1rem',
          padding: '1rem 1.2rem',
          fontSize: '1.2rem',
          color: 'primary',
        }}
        pill
      >
        {review.rating}
      </Badge>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="text-display">{review.text}</Card.Text>

        <Button onClick={() => editReview(review)} className="edit" variant="primary">
          <FaEdit color="primary" />
        </Button>

        <Button
          onClick={() => deleteReview(review.id)}
          className="close"
          variant="danger"
        >
          <FaTimes color="orange" />
        </Button>
      </Card.Body>
    </Card>
  )
}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
}

export default ReviewItem
