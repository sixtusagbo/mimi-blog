import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not_found">
      <h2>Oops!</h2>
      <p>Could not find that page</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}

export default NotFound;