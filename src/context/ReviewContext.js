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
      }}
    >
      {children}
    </ReviewContext.Provider>
  )
}

export default ReviewContext
