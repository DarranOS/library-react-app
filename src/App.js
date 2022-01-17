import 'bootstrap/dist/css/bootstrap.css'
import './App.scss'

import Header from './components/Header'
import ReviewList from './components/ReviewList'
import ReviewStats from './components/ReviewStats'
import ReviewForm from './components/ReviewForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
import { ReviewProvider } from './context/ReviewContext'

function App() {
  return (
    <ReviewProvider>
      <Router>
        <Header />
        <div className="bg-dark container-fluid m-0 v-100 text-center pt-5">
          <div className="container pt-2">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <ReviewForm />
                    <ReviewStats />
                    <ReviewList />
                  </>
                }
              ></Route>

              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <AboutIconLink />
        </div>
      </Router>
    </ReviewProvider>
  )
}

export default App
