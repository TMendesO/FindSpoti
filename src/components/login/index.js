import React from 'react';
import style from './Login.module.css';
import Head from '../Head';

const Login = (props) => {
  return (
    <>
      <div className="App">
        <Head title="FindSpoti | Login" description="Entre em contato" />
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
