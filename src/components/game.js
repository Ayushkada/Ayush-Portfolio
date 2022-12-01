import React from 'react';
import './game.scss'
  
const Game = () => {
  return (
    <div className="container game-page">
      <div className="title">
        <t>Contact</t>
      </div>
      <div className="text-zone">
        <div className="phone">
          <h>+1 732 401 5311</h>
        </div>
        <div className="email">
          <a 
          href="ayushkadakia99@gmail.com"
          target="_blank"
          rel="noreferrer">
          ayushkadakia99@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
  
export default Game;