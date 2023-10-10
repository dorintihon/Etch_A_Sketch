// Create button
var button = document.createElement('button');
button.innerText = 'Set Grid Size';
document.body.appendChild(button);

button.addEventListener('click', function() {
    var validInput = false;
    var userInput;

    while (!validInput) {
        userInput = prompt("Enter number of squares per side:");
        
        if (userInput !== null && !isNaN(userInput) && userInput > 0 && userInput <=100) {
            validInput = true;
        } else {
            alert("Invalid input! Please enter a positive number.");
        }
    }
    
    gridSize = parseInt(userInput);
    createGrid(gridSize);
});

var mouseIsDown = false;

document.addEventListener('mousedown', function() {
    mouseIsDown = true;
});

document.addEventListener('mouseup', function() {
    mouseIsDown = false;
});

function createGrid(gridSize) {
    // Clear any existing container
    if (document.querySelector('.container')) {
        document.querySelector('.container').remove();
    }

    var container = document.createElement('div');
    container.className = 'container';

    container.style.width = '480px';
    container.style.height = '480px';

    // Create the needed number of grids
    for (let i = 0; i < gridSize * gridSize; i++) {
        var grid = document.createElement('div');
        grid.className = 'grid';

        // Add event listener to change color on mouseover
        grid.addEventListener('mouseover', function() {
            if (mouseIsDown) {
                this.style.backgroundColor = 'black'; // Change to desired color
            }
        });

        container.appendChild(grid);
    }

    // Apply styles to the container
    container.style.display = 'grid';
    container.style.border = '1px solid green';
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    document.body.appendChild(container);
}