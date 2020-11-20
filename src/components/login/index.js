import React from 'react';
import style from './Login.module.css';

const Login = (props) => {
  return (
    <>
      <div className="App">
        <button className={style.btn}>
          <a className={(style.btn, style.link)} href={props.link}>
            Login on spotify
          </a>
        </button>
      </div>
    </>
  );
};

export default Login;
