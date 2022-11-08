import React from 'react';
import './game.scss'
  
const Game = () => {
  return (
    <div className="container game-page">
      <div className="title">
        <t>
          Game
        </t>
      </div>
      <div className="text-zone">
        <h1>This is a game I created with pygame. It is a simple astroids game in which the player attempts to
          destory the astroids coming at them with their spaceship. The spaceship can be moved through the use of the arrow keys, and the spaceship 
          shoots a lazer when the player presses the arrow key. Creating the game allowed me to obtain a better grasp of how to use python and pygame. 
        </h1>
      </div>
      
    </div>
  );
};
  
export default Game;