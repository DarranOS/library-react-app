import { createContext, useState, useEffect } from 'react'
import {
  db,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  setDoc,
  doc,
} from '../firebase-config'

const ReviewContext = createContext()

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([{ name: 'Loading...', id: 'initial' }])
  const [isLoading, setIsLoading] = useState(false)
  const [reviewEdit, setReviewEdit] = useState({
    review: {},
    edit: false,
  })

  useEffect(
    () =>
      onSnapshot(collection(db, 'books'), (snapshot) =>
        setReviews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),

    []
  )

  // const fetchReviews = async (params) => {
  //   const response = await fetch('/reviews?_sort=id&_order=desc')
  //   const data = await response.json()

  //   setReviews(data)
  //   setIsLoading(false)
  // }

  // const addReview = async (newReview) => {
  //   const response = await fetch('/reviews', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newReview),
  //   })

  //   const data = await response.json()

  //   setReviews([data, ...reviews])
  // }

  // const deleteReview = async (id) => {
  //   if (window.confirm('Are you sure you want to delete')) {
  //     await fetch(`/reviews/${id}`, { method: 'DELETE' })
  //     setReviews(reviews.filter((review) => review.id !== id))
  //   }
  //   console.log(3, id)
  // }

  const addReview = async ({ text, rating, title, author }) => {
    console.log(reviews)
    await addDoc(collection(db, 'books'), {
      title: title,
      author: author,
      text: text,
      rating: rating,
    })
  }

  const deleteReview = async (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      await deleteDoc(doc(db, 'books', id))
    }
  }

  const updateReview = async (id, updReview) => {
    await setDoc(doc(db, 'books', id), updReview, { merge: true })
    setReviewEdit({
      review: {},
      edit: false,
    })
  }

  // const updateReview = async (id, updReview) => {
  //   const response = await fetch(`/reviews/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(updReview),
  //   })

  //   const data = await response.json()

  //   setReviews(
  //     reviews.map((review) => (review.id === id ? { ...review, ...data } : review))
  //   )
  // }
  // const updateReview = async (id, updReview) => {
  //   const response = await fetch(`/reviews/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(updReview),
  //   })

  //   const data = await response.json()

  //   setReviews(
  //     reviews.map((review) => (review.id === id ? { ...review, ...data } : review))
  //   )
  // }

  const editReview = (review) => {
    setReviewEdit({
      review,
      edit: true,
    })
  }

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        deleteReview,
        addReview,
        editReview,
        updateReview,
        reviewEdit,
        isLoading,
      }}
    >
      {children}
    </ReviewContext.Provider>
  )
}

export default ReviewContext
