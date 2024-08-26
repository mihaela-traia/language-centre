import { useRouteError } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <div
        id="error-page container"
        className="row h-100 w-100 col-12 text-center mt-5 pt-5"
      >
        <h1 className="col-12 josefin-sans-h2">Oops!</h1>
        <p className="col-12 montserrat-sans-p">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="col-12 montserrat-sans-p pb-5">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Layout>
  );
}
