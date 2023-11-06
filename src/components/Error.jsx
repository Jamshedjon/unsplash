import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <main className=" h-screen grid place-content-center text-center">
      <p className="text-9xl mb-5">404</p>
      <p className="mb-8 text-5xl">Page Not Found</p>
      <Link className="btn btn-primary" to="/">
        Go To Home
      </Link>
    </main>
  );
}

export default Error;
