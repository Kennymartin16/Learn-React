import { Link } from "react-router-dom";

const Error = () => {
  return(
    <div className="error">
      <h2>Sorry😞</h2>
      <p><span>404</span>That page cannot be found</p>
      <Link to="/">
      <button>Back to Homepage...</button>
      </Link>
    </div>
  );
}

export default Error;