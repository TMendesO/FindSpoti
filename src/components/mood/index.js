import React from 'react';
import SadSvg from './moods/SadSvg';
import HappySvg from './moods/HappySvg';
import AngrySvg from './moods/AngrySvg';

const Mood = ({ ...props }) => {
  return (
    <section>
      <button>
        <a>
          <HappySvg />
        </a>
      </button>

      <button>
        <a>
          <SadSvg />
        </a>
      </button>

      <button>
        <a>
          <AngrySvg />
        </a>
      </button>
    </section>
  );
};

export default Mood;
