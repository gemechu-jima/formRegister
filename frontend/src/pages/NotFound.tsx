
import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      {error ? (
        <div>
          <h2>{ "Error"}</h2>
          <p>{ "Not Found"}</p>
        </div>
      ) : (
        <p>We couldn't find what you were looking for.</p>
      )}
    </div>
  );
}

export default NotFound;