import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container text-center py-5">
    <h1 className="display-4">404</h1>
    <p className="lead">Oops! Page not found.</p>
    <p>It looks like the page you're looking for does not exist.</p>
    <Link to="/" className="btn btn-danger">Go to Homepage</Link>
  </div>
  )
}
