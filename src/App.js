import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
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

      <div className="main">
        <p className="main-title">新時代のWebページ構築</p>
        <p className="main-text">新時代のWebページ構築は弊社にお任せください</p>
      </div>

      <div className="main2">
        <div className="main2-box">
          <p className="main2-text">テキストテキストテキスト</p>
          <div className="button button-yellow">お申し込みはこちら</div>
        </div>

        <div className="main2-list">
          <div className="titletext">
            <p className="title">タイトル</p>
            <p className="text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        
          <div className="titletext">
            <p className="title">タイトル</p>
            <p className="text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        
          <div className="titletext">
            <p className="title">タイトル</p>
            <p className="text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </div>

      <div className="plans">
        <div className="plan">
          <div className="basic">
            <p className="plan-name">ベーシック</p>
            <p className="price">¥1,000/m</p>
          </div>
          <div className="checklist">
            <ul>
              <li><span className="list"><img src="check-blue.png"/>テキストテキストテキスト</span></li>
              <li><span className="list"><img src="check-blue.png"/>テキストテキストテキスト</span></li>
              <li><span className="list"><img src="check-blue.png"/>テキストテキストテキスト</span></li>
              <li><span className="list"><img src="check-blue.png"/>テキストテキストテキスト</span></li>
            </ul>
            <div className="button button-blue">お申し込みはこちら</div>
          </div>
        </div>

        <div className="plan">
          <div className="plemium">
            <p className="plan-name">プレミアム</p>
            <p className="price">¥5,000/m</p>
          </div>
          <div className="checklist">
            <ul>
              <li><span className="list"><img src="check-yellow.png"/>テキストテキストテキスト</span></li>
              <li><span className="list"><img src="check-yellow.png"/>テキストテキストテキスト</span></li>
              <li><span className="list"><img src="check-yellow.png"/>テキストテキストテキスト</span></li>
              <li><span className="list"><img src="check-yellow.png"/>テキストテキストテキスト</span></li>
            </ul>
            <div className="button button-yellow">お申し込みはこちら</div>
          </div>
        </div>
      </div>

      <div className="icons">
        <div className="icon">
          <img src="mark1.png"/>
          <p className="title">タイトル</p>
          <p className="text">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div className="icon icon2">
          <img src="mark2.png"/>
          <p className="title">タイトル</p>
          <p className="text">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>        
        </div>
        <div className="icon">
          <img src="mark3.png"/>
          <p className="title">タイトル</p>
          <p className="text">テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>

      <div className="footer">
        <hr/>
        <img src="footer-logo.png"/>
        <div className="footer-menu">
          <div className="menu1">メニュー</div>
          <div className="menu2">メニュー</div>
          <div className="menu3">メニュー</div>
          <div className="menu4">メニュー</div>
        </div>
        <div className="footer-menu">
          <div className="menu1">メニュー</div>
          <div className="menu2">メニュー</div>
          <div className="menu3">メニュー</div>
          <div className="menu4">メニュー</div>
        </div>
      </div>
    </div>
  );
}

export default App;
