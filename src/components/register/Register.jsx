import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/authors/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json",
          /*  Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsnR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTUzMTg5Mjk5MzU2OGEzNDdmYjMxMzYiLCJpYXQiOjE2MzI5MTc2NDMsImV4cCI6MTYzMzAwNDA0M30.Xwd-qFaLGjLMbip2RBWaIYl7UfzPfNYtqY49fP-6_yg", */
        },
      });
      if (response.ok) {
        alert("registered!");
        history.push("/");
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="container mt-5">
      <div
        className="row justify-content-center align-items-center text-black"
        style={{ marginTop: "300px" }}
      >
        <div className="col-6">
          <Form className="d-flex flex-column" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              className="mr-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="surname"
              className="mr-2"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              className="mr-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="mr-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
