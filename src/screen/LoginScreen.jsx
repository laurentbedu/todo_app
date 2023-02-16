import { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { AuthContext } from "../contexts/AuthContext";
import useCookie from "../hooks/useCookie";

function LoginScreen(props) {
  //const [auth, setAuth] = useLocalStorage("auth", null);
  const {auth, setAuth} = useContext(AuthContext);
  const [authCookie, setAuthCookie] = useCookie("auth");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    const body = JSON.stringify(jsonData);
    fetch("http://localhost:5000/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body,
    })
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setAuth(json.data);
        setAuthCookie(json.token ?? null, {"max-age":`${60*60*24}`});
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = (e) => {
    setAuth(null);
    setAuthCookie(null);
  };

  return (
    <>
      {auth && (
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      )}
      {!auth && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pincode" className="form-label">
              Pincode
            </label>
            <input
              id="pincode"
              name="pincode"
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      )}
    </>
  );
}
export default LoginScreen;
