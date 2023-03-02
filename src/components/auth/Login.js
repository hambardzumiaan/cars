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
    document.title = "Авторизоваться";
  }, []);

  return (
    <Card>
      <form className="form-signin" onSubmit={onHandleLogin}>
        <h1 className="h5 mb-4">Авторизоваться</h1>
        <label className="sr-only mt-2" htmlFor="Электронная почта">
          Электронная почта
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Электронная почта"
          required
        />
        <label className="sr-only" htmlFor="Пароль">
          Пароль
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Пароль"
          required
        />
        <button
          className="btn btn-lg btn-outline-dark btn-block w-100"
          type="submit"
        >
          Войти
        </button>
        <hr />
        <CardsBottomSide />
      </form>
    </Card>
  );
};

export default Login;
