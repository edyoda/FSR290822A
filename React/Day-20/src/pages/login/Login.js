import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import {authActions } from "../../store/auth-slice";
import {useDispatch} from 'react-redux';


// TODO: htmlFor, controlled Component

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function usernameChangeHandler(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function passwordChangeHandler(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function loginHandler(event) {
    event.preventDefault();

    if(username === "admin" && password === "admin"){
      dispatch(authActions.login(username))
      navigate('/')
    }

  }

  return (
    <div className={styles["login-form-container"]}>
      <form className={styles.login} onSubmit={loginHandler}>
        <div className={styles.formControl}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className={styles.input}
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>

        <div className={styles.formControlButton}>
          <button className={styles.input} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
