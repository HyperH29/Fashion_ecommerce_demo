import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Account() {
  const [user, setUser] = useState(0);
  const [error, setError] = useState(0);

  useEffect(() => {
    setUser("User");
    setError("error");
  }, [user, error]);
  // Navigate to the home page when the user logs out
  const navigate = useNavigate();

  // Function to handle the log out
  const handleLogOut = () => {
    alert("You have been logged out");
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className={"m-5 p-5"}>
        <Button style={{ marginLeft: "90%" }} onClick={handleLogOut}>
          Log Out
        </Button>
        <h1>Account: {user}</h1>
        <p>Account page content for: {user}</p>{" "}
      </div>
    </div>
  );
}
export default Account;
