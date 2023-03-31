import { useState } from "react";
//import { Link } from "react-router-dom";
//import { useParams } from "react-router-dom";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="fs-3 text-warning fw-bold"> Snack Streaming </h1>
    </>
  );
}

export default Homepage;
