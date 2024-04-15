import { useState } from "react";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from "../styles/Login.module.css";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };


  const handleForgotPassword = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setResetEmail('');
  };

  const handleEmailChange = (e) => {
    setResetEmail(e.target.value);
  };

  const handleSendReset = () => {
    console.log('Sending password reset email to:', resetEmail);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className={styles.authFormContainer}>
    <h1 className={styles.title}>Sign In</h1>
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <label htmlFor="email" className={styles.label}>Your E-Mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className={styles.input}/>

     <div className={styles.passwordContainer}>
      <label htmlFor="password" className={styles.label}>Password</label>
      <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="********"
            id="password"
            name="password"
            className={styles.input}/>
          <FontAwesomeIcon 
            icon={showPassword ? faEye : faEyeSlash} 
            className={styles.eyeIcon} 
            onClick={toggleShowPassword} />
        </div>

        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="rememberMe" name="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.label}>Remember me</label>
        </div>

        <button type="submit" className={styles.button}>Sign In</button>
      </form>

      <button className={styles.linkButton} onClick={() => props.onFormSwitch('register')}>
        <Link to="/register">Create Account</Link>
      </button>

      <button className={styles.forgotPasswordLink} onClick={handleForgotPassword}>
        Forgotten your password?
      </button>


      {showModal && (
      <div className={styles.modal}>
      <div className={styles.modalContent}>
      <span className={styles.close} onClick={handleCloseModal}>
        <FontAwesomeIcon icon={faXmark} />
        </span>
        <p>Reset password will be sent to your e-mail:</p>
        <input 
        type="email" 
        placeholder="Enter your e-mail"
        value={resetEmail}
        onChange={handleEmailChange}/>
            <button onClick={handleSendReset}>SEND</button>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default Login;