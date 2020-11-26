import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './components/login';
import Mood from './components/mood';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const authEndpoint = 'https://accounts.spotify.com/authorize?';
  const clientId = '2ca4071725d44b37b5507295bcaeeabb';
  const redirectUri = 'http://findspoti.surge.sh/mood';
  const scopes = ['user-read-currently-playing', 'user-read-playback-state'];

  // Get the hash of the url
  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  //

  const getData = (token) => {
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWTwbZHrJRIgD',
      headers: { Authorization: `Bearer ${token}` },
    }).then(function (response) {
      console.log(response);
    });
  };

  const setToken = () => {
    if (hash.access_token) {
      localStorage.setItem('user', hash.access_token);
      //getData(hash.access_token);
    }
    window.location.hash = '';
  };
  setToken();

  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Login
                  link={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                    '%20',
                  )}&response_type=token&show_dialog=true`}
                />
              }
            />
            <Route path="mood" element={<Mood />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
