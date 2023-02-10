import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Error: {err.status}</h1>
      <h2>Error Details : {err.statusText}</h2>
    </>
  );
};

export default Error;
