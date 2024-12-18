const board = document.createElement('div');
const hundredDivs = new Array(10).fill(new Array(10));

board.id = 'game-board';

board.innerHTML = hundredDivs.map((item, index) =>/*html*/ `
<div class='game-row'>${item.map((_, index) => /*html*/`
  <div class='game-cell'>${index}</div>
  `).join('')}</div>
`).join('');

export default board;