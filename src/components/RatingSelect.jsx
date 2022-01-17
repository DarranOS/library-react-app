import React, { useState, useContext, useEffect } from 'react'
import ReviewContext from '../context/ReviewContext'
import { Row, Col, Form, Container } from 'react-bootstrap'

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(1)

  const { reviewEdit } = useContext(ReviewContext)

  const handleChange = (e) => {
    setSelected(+e.target.value)
    select(+e.target.value)
  }

  useEffect(() => {
    setSelected(reviewEdit.review.rating)
  }, [reviewEdit])

  return (
    <Container>
      <Form>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <Col xs={3}>
              <Form.Check
                inline
                onChange={handleChange}
                checked={selected === number}
                name="rating"
                type="radio"
                id={`num${number}`}
                label={number}
                value={number}
              />
            </Col>
          ))}
        </Row>
      </Form>
    </Container>
  )
}

export default RatingSelect
