import cell from "./components/cell";

const board = document.createElement('div');
const row = document.createElement('div');
row.classList.add('game-row');

board.id = 'game-board';

cloneRows(board);

function cloneRows(parentElement) {
    for (let i = 0; i < 10; i++) {
        const newRow = row.cloneNode();
        newRow.id = String.fromCharCode(97 + i);
        parentElement.appendChild(newRow);
        cloneCells(newRow);
    }
}

function cloneCells(parentElement) {
    for (let i = 1; i <= 10; i++){
        const newCell = cell.cloneNode();
        newCell.id = `${parentElement.id}${i}`;
        parentElement.appendChild(newCell);
    }
}

export default board;