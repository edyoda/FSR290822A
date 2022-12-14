import { Component, createRef } from "react";
import { useRef } from "react";
import styles from "./Register.module.css";

function Register() {
  const usernameRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(usernameRef.current.value, nameRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className={styles.input}
        id="username"
        placeholder="Enter your username"
        ref={usernameRef}
      />
      <input className={styles.input} id="name" placeholder="Enter your name" ref={nameRef} />
      <input
        className={styles.input}
        id="password"
        type="password"
        placeholder="Enter your new password"
        ref={passwordRef}
      />
      <button type="submit" className={styles.input}>
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}

// class Register extends Component {
//   constructor() {
//     super()
//     this.usernameRef = createRef();

//     this.passwordRef = createRef();

//     this.nameRef = createRef();
//   }

//   onSubmitHandler = (event) => {
//     event.preventDefault();
//     console.log(this.usernameRef.current.value, this.nameRef.current.value, this.passwordRef.current.value);
//   };

//   render() {
//     return (
//       <form onSubmit={this.onSubmitHandler}>
//         <input
//           className={styles.input}
//           id="username"
//           placeholder="Enter your username"
//           ref={this.usernameRef}
//         />
//         <input
//           className={styles.input}
//           id="name"
//           placeholder="Enter your name"
//           ref={this.nameRef}
//         />
//         <input
//           className={styles.input}
//           id="password"
//           type="password"
//           placeholder="Enter your new password"
//           ref={this.passwordRef}
//         />
//         <button type="submit" className={styles.input}>
//           {" "}
//           Submit{" "}
//         </button>
//       </form>
//     );
//   }
// }

export default Register;
