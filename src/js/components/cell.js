const cell = document.createElement('div');
cell.classList.add('game-cell')

cell.gameSettings = {
    //configurar los cambios de clases cuando se pinte o no
    boatPlaced : false,
    attacked: false
}

export default cell;