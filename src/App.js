import React from 'react';
import './App.css';
import Login from './components/login';
import Mood from './components/mood';

class App extends React.Component {
  constructor(props) {
    super(props);
    const parametros = this.getHashParams();
    const token = parametros.access_token;
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
    console.log(this.token);
    return hashParams;
  }
  render() {
    return (
      <div className="App">
        <Login />
        <Mood />
      </div>
    );
  }
}

export default App;
