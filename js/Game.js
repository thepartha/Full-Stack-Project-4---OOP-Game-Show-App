/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{

    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    //PHRASES FOR THE GAME
    createPhrases(){
        return [new Phrase('No guts no story'), new Phrase('my life is my message'), new Phrase('leave no stone unturned'), new Phrase('stay hungry stay foolish')];
    }

    //GET A RANDOM PHRASE EVERYTIME THE GAME IS REST
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)]
    }

    //START GAME
    startGame(){
        this.activePhrase = this.getRandomPhrase();
        document.getElementById('overlay').style.display = 'none'
        this.activePhrase.addPhraseToDisplay();

    }

    //HANDLES ALL THE INTERACTION BASED ON USER INPUT
    handleInteraction(target){
        if( this.activePhrase.checkLetter(target.innerText)) {
            target.classList.add('chosen','animated', 'tada');
            this.activePhrase.checkLetter(target.innerText);
            this.gameOver(this.checkForWin());
        } else {
            target.classList.add('wrong','animated', 'flash');
            this.removeLife();
        }
        
      
    }

    //CHECK WIN STATE
    checkForWin(){
        const letters = document.getElementById('phrase').querySelector('ul').children;
        for (let i =0; i < letters.length; i++){
            if (letters[i].classList.contains('hide') === true) {
                return false;
            }
        } return true;
    }

    //REMOVES A LIFE WHEN WRONG LETTER IS SELECTED 
    removeLife(){
        const lifes = document.getElementById('scoreboard').querySelector('ol').children;
        this.missed += 1;
        lifes[this.missed - 1].innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`;
        if (this.missed >= 5){
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('game-over-message').innerText = 'Sorry, better luck next time!';
            document.getElementById('overlay').className ='lose';   
            this.reset();   
          
        }
    }

    //SHOWS GAME OVER OVERLAY
    gameOver(status){
        if(status){
            document.getElementById('overlay').style.display = 'block';
            document.getElementById('game-over-message').innerText = 'Great Job!';
            document.getElementById('overlay').className ='win';
            this.reset();
        }
    }

    //RESET ALL THE ELEMENTS BEFORE STARTING THE GAME AGAIN
    reset(){
        const ul = document.getElementById('phrase').querySelector('ul');   
        ul.innerHTML = '';
        let keys = document.getElementById('qwerty').querySelectorAll('.key');
   
        for(let i=0; i <keys.length; i++){
              keys[i].setAttribute('class','key');

        }
      
        const lifes = document.getElementById('scoreboard').querySelector('ol').children;
        for(let i=0; i <lifes.length; i++){
            lifes[i].innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`;
        }

        this.missed = 0;
    }



 }