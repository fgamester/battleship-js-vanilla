import board from "./board";

const game = document.createElement('div');
game.appendChild(board);
game.id = 'game';

export default game;