import React from 'react';
import { FaSpotify } from 'react-icons/fa';

const Login = () => {
  return (
    <>
      <div className="App">
        <button>
          <a href="http://localhost:8888">
            <FaSpotify />
            Login
          </a>
        </button>
      </div>
    </>
  );
};

export default Login;
