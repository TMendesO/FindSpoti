import React from 'react';
import axios from 'axios';
import SadSvg from './moods/SadSvg';
import HappySvg from './moods/HappySvg';
import AngrySvg from './moods/AngrySvg';
import style from './Mood.module.css';

const Mood = (props) => {
  const token = localStorage.getItem('user');

  const getData = (playlistId) => {
    axios({
      method: 'get',
      url: `https://api.spotify.com/v1/playlists/${playlistId}`,
      headers: { Authorization: `Bearer ${token}` },
    }).then(function (response) {
      const playListUrl = response.data.external_urls.spotify;
      window.location.href = playListUrl;
    });
  };

  return (
    <section>
      <button className={(style.btn, style.btnH)}>
        <a
          onClick={() => {
            getData('37i9dQZF1DWTwbZHrJRIgD');
          }}
        >
          <HappySvg />
        </a>
      </button>

      <button className={(style.btn, style.btnS)}>
        <a
          onClick={() => {
            getData('37i9dQZF1DX7qK8ma5wgG1');
          }}
        >
          <SadSvg />
        </a>
      </button>

      <button className={(style.btn, style.btnA)}>
        <a
          onClick={() => {
            getData('37i9dQZF1DXaKgOqDv3HpW');
          }}
        >
          <AngrySvg />
        </a>
      </button>
    </section>
  );
};

export default Mood;
