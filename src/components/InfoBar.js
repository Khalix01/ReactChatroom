import React from 'react';

import '../css/Infobar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/ReactChatroom/">close</a>
    </div>
  </div>
);

export default InfoBar;