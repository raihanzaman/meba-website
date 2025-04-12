const start = document.getElementById("start-button");
start.addEventListener("click", () => {
    startGame();
});

let mole = "<div class='mole'></div>";
let score = 0;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to start the game 
const startGame = () => {
    console.log("Game started");
    const board = document.getElementById("game-board");
    let randHole = (Math.floor(Math.random() * 16) + 1).toString();
    createMole(board)
    sleep(1000);
}

const createMole = (board) => {
    let randHole = (Math.floor(Math.random() * 16) + 1).toString();
    const hole = board.getElementById("hole" + randHole);

}