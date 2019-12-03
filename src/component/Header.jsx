import React from 'react';

function Header() {
  return (
    <div>
      <header className="App-header">
        <ul className="menu">
          <li>リンク</li>
          <li>リンク</li>
          <li className="button-yellow menu-button">コンタクト</li>
        </ul>
      </header>

      <div className="top">
        <div className="top-contents">
          <div className="title-text">タイトルテキスト</div>
          <div className="button button-blue">ボタンテキストが入ります</div>
        </div>
      </div>
    </div>

  );
}
export default Header;