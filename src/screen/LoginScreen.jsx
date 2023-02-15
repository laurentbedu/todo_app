function LoginScreen(props) {
    
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
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
  };

  return (
    <>
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
    </>
  );
}
export default LoginScreen;
