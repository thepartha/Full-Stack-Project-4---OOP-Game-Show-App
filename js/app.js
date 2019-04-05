/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//GAME VARIABLE DECLARATION
let game;


//ADDING ANIMATION CLASSES FOR THE BUTTONS
document.getElementById('btn__reset').addEventListener('mouseover', function(event){
     event.target.classList.add('animated', 'pulse');
})   
document.getElementById('btn__reset').addEventListener('mouseout', function(event){
    event.target.classList.remove('animated', 'pulse');
})   




//START A NEW GAME 
document.getElementById('btn__reset').addEventListener('click', function(){
    game = new Game();
    game.startGame();
})

//EVENT LISTENER FOR ON SCREEN KEYBOARD
document.getElementById('qwerty').addEventListener('click', function(event){
    if (event.target.classList.contains('key')){
        game.handleInteraction(event.target);
    }
});

//EVENT LISTENER FOR KEYDOWN/KEYBOARD EVENTS
document.addEventListener('keydown', function(event){
    if(event.keyCode >= 65 && event.keyCode <= 90) {
        const keys = document.getElementById('qwerty').querySelectorAll('.key');    
         for(let i=0; i<keys.length; i++){
            if(keys[i].innerText == event.key.toLowerCase()){
                game.handleInteraction(keys[i]);
            }
         }
    }
    
 
    
});