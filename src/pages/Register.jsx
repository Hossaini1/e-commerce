import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/Register.module.css";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.authFormContainer}>
      <h1 className={styles.title}>Create your account</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="email" className={styles.label}>Your E-Mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className={styles.input}
        />

        <label htmlFor="name" className={styles.label}>Your Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          id="name"
          name="name"
          className={styles.input}
        />

        <label htmlFor="mobile" className={styles.label}>Mobile Number</label>
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          type="tel"
          placeholder="Enter your mobile number"
          id="mobile"
          name="mobile"
          className={styles.input}
        />

        <div className={styles.passwordContainer}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="********"
            id="password"
            name="password"
            className={styles.input}
          />
          <FontAwesomeIcon 
            icon={showPassword ? faEye : faEyeSlash} 
            className={styles.eyeIcon} 
            onClick={toggleShowPassword} 
          />
        </div>

        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="rememberMe" name="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.label}>I would like to receive offers on discounts and new products</label>
        </div>

        <button type="submit" className={styles.button}>Create account</button>
      </form>

      <button className={styles.linkButton} onClick={() => props.onFormSwitch('login')}>
        <Link to="/login">Sign In</Link>
      </button>
    </div>
  );
};

export default Register;