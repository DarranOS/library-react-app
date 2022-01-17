import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about text-light">
      <h1>About this Project</h1>
      <p>This is a simple React app to leave feedback on your favorite books</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </div>
  )
}

export default About
