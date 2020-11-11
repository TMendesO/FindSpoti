import React from 'react';
import { FaSpotify } from 'react-icons/fa';

class Login extends React.Component {
  constructor(props) {
    super(props);
    const parametros = this.getHashParams();
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  render() {
    return (
      <>
        <FaSpotify />
        <div className="App">
          <button>
            <a href="http://localhost:8888">Login</a>
          </button>
        </div>
      </>
    );
  }
}

export default Login;
