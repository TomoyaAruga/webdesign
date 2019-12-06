import React from 'react';

function Plans() {
  return (
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
  );
}
export default Plans;