// import { useState } from 'react'
// import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'
import { Card, Button, Badge, DropdownButton, Dropdown } from 'react-bootstrap'

function ReviewItem({ review }) {
  const { deleteReview, editReview } = useContext(ReviewContext)

  return (
    <Card border="danger" className="my-4">
      <Badge
        bg="primary"
        className="num-display text-dark"
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
        <Card.Title className="px-4"> {review.title}</Card.Title>
        <Card.Subtitle className="mb-4 text-muted"> by {review.author}</Card.Subtitle>
        <Card.Text className="text-display">{review.text}</Card.Text>

        <DropdownButton title="Edit" id="bg-vertical-dropdown-1">
          <Dropdown.Item eventKey="1" onClick={() => editReview(review)}>
            Edit
          </Dropdown.Item>
          <Dropdown.Item
            variant="danger"
            eventKey="2"
            onClick={() => deleteReview(review.id)}
          >
            Delete
          </Dropdown.Item>
        </DropdownButton>
      </Card.Body>
    </Card>
  )
}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
}

export default ReviewItem
