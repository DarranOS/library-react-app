import Card from './shared/Card'
import React, { useState, useContext, useEffect } from 'react'
// import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import ReviewContext from '../context/ReviewContext'
import { Button, Container, Form, Col, Row, InputGroup } from 'react-bootstrap'

function ReviewForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(8)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const { addReview, reviewEdit, updateReview } = useContext(ReviewContext)

  useEffect(() => {
    if (reviewEdit.edit === true) {
      setBtnDisabled(false)
      setText(reviewEdit.review.text)
      setRating(reviewEdit.review.rating)
    }
  }, [reviewEdit])

  const handleTextChange = (e) => {
    console.log()
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Review must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)

    if (text.trim().length > 10) {
      const newReview = {
        text,
        rating,
      }

      if (reviewEdit.edit === true) {
        updateReview(reviewEdit.review.id, newReview)
      } else {
        addReview(newReview)
      }
      setText('')
    }
  }

  return (
    <Card>
      <Container>
        <div className="p-4">
          <h2 className="mb-4">
            How did you
            <span className="text-primary"> like the </span>
            book
          </h2>

          <Form className="m-4 p-5" onSubmit={handleSubmit}>
            <RatingSelect select={(rating) => setRating(rating)} />
            <Row className="mt-4">
              <Col>
                <Form.Group>
                  <InputGroup>
                    <Form.Control
                      name="reviewForm"
                      placeholder="Write a review..."
                      onChange={handleTextChange}
                      value={text}
                      type="text"
                    />
                    <Button
                      variant="primary"
                      type="submit"
                      className="px-4"
                      disabled={btnDisabled}
                    >
                      Send
                    </Button>
                  </InputGroup>
                  <Form.Text className="text-muted pt-4">
                    <div className="message pt-2" style={{ minHeight: '2rem' }}>
                      {message ? <p>{message}</p> : ''}
                    </div>
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </Card>
  )
}

export default ReviewForm
