/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }   

    //CREATE PHRASE HTML AND ADD IT TO DOM
    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').querySelector('ul');
        for(let i = 0; i < this.phrase.length; i++){
            const li = document.createElement('li');
            if(this.phrase.charAt(i) === ' '){
                li.setAttribute('class','space');
            }else {
                li.setAttribute('class',`hide letter ${this.phrase.charAt(i)}`);
            }
            li.innerText = `${this.phrase.charAt(i)}`;
            ul.appendChild(li);
           
        }
    }

    //CHECKS TO SEE IF THE LETTER SELECTED MATCHES
    checkLetter(letter){
         if( this.phrase.indexOf(letter) > -1 ){
            this.showMatchedLetter(letter);
            return true; 
        }
    }
    
    //REVEAL MATCHED LETTERS
    showMatchedLetter(letter){
        const letters = document.getElementById('phrase').querySelector('ul').children;
        for (let i =0; i < letters.length; i++){
            if (letters[i].innerText == letter){
                letters[i].setAttribute('class',`show letter ${letter}`);
                letters[i].classList.add('animated', 'tada');
            }
        }
    }

 }