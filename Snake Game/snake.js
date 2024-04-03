let direction = {x:0, y:0};
const foodSound = new Audio();
const gameOverSound = new Audio();
const moveSound = new Audio();
const musicSound = new Audio();
let speed = 2;
lastPaintTime = 0;
let snakeArr = [
    {x:13, y:51}
]
food = {x:6,y:7};
//game function
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime
    gameEngine();
}


function gameEngine(){
// update snake array & food

// display snake food
board.innerHtml = "";
snakeArr.forEach((e, index)=>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.style.classList.add('snake');
    if(index === 0{
        snakeElement.style.classList.add('head');  
    })
    board.appendChild(snakeElement);
 // Display the food
 foodElement = document.createElement('div');
 foodElement.style.gridRowStart = food.y;
 foodElement.style.gridColumnStart = food.x;
 foodElement.style.classList.add('food');
 board.appendChild(foodElement); 

})
}


//main logic
window.requestAnimationFrame(main);