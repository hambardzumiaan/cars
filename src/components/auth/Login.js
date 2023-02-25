import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginRequest } from "../../redux/auth/action";
import { Card, CardsBottomSide } from "./Card";
import "../../components/auth/login.scss";
import { emailRegex } from "../../utility";

const Login = () => {
  const dispatch = useDispatch();
  const onHandleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email.length > 0 && email.match(emailRegex)) {
      if (password.length > 4) {
        dispatch(
          getLoginRequest({
            email,
            password,
          })
        );
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    document.title = "Sing in";
  }, []);

  return (
    <Card>
      <form className="form-signin" onSubmit={onHandleLogin}>
        <h1 className="h5 mb-4">Sign in</h1>
        <label className="sr-only mt-2">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <label className="sr-only">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          required
        />
        <button
          className="btn btn-lg btn-outline-dark btn-block w-100"
          type="submit"
        >
          Submit
        </button>
        <hr />
        <CardsBottomSide />
      </form>
    </Card>
  );
};

export default Login;
