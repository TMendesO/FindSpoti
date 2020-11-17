import React from 'react';
import { FaSpotify } from 'react-icons/fa';

const Login = (props) => {
  return (
    <>
      <div className="App">
        <button>
          <a href={props.link}>
            <FaSpotify />
            Login
          </a>
        </button>
      </div>
    </>
  );
};

export default Login;
