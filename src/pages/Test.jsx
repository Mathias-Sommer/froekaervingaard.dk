import "../App.css";
import { useNavigate } from "react-router";

function Test() {
  const navigate = useNavigate();

  return (
    <>
      <p className="read-the-docs">Test side</p>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </>
  );
}

export default Test;
