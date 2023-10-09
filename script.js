var container = document.createElement('div');
container.className = 'container';
var size = 16;
const gridWidth = 30;
const gridHeight = 30;
const containerWidth = gridWidth * size;
const containerHeight = gridHeight * size;
for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++){
    var grid = document.createElement('div');
    grid.className = 'grid';
    container.appendChild(grid);
    grid.style.width = gridWidth + 'px';
    grid.style.height = gridHeight + 'px';
}
}

// Apply grid styles to the container
container.style.display = 'grid';
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

container.style.width = containerWidth + 'px';
container.style.height = containerHeight + 'px';

document.body.appendChild(container);