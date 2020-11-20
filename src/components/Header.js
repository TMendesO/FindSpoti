import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.bg}>
      <div className={style.icone}>
        <a href="/"></a>
      </div>
    </header>
  );
};

export default Header;
