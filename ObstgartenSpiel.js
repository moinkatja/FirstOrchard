window.addEventListener( 'DOMContentLoaded', newGame , false);
let buttonNewGame = document.getElementById("new-game");
let buttonRollDice = document.querySelector( '.dice-roll' );
let diceSide = document.getElementById("dice-side");
let status = document.getElementById("status");
let apple, pear, plum, cherry, rabe;
let img = document.getElementById("dice-pic");
let fruitButton = document.querySelectorAll(".fruit-btn");
let pickedFruit = document.querySelectorAll(".fruit-img");
let diceImg=[
    'img/apfel.png',
    'img/kirsche.png',
    'img/birne.png',
    'img/pflaume.png',
    'img/rabe.png',
    'img/basket.png'   
];

buttonNewGame.onclick = function() {
    status.style.display="block";
    this.disabled = true;
    buttonRollDice.style.display = "block";
    newGame(); 
}

function newGame () {
    status.style.color = "black" ;
    status.innerHTML = "Roll the dice";
    img.src = "img/dice.png";
    document.getElementById("rabe1").style.display = "none";
    document.getElementById("rabe2").style.display = "none";
    document.getElementById("rabe3").style.display = "none";
    document.getElementById("rabe4").style.display = "none";
    document.getElementById("rabe5").style.display = "none";
    apple = 4;
    pear = 4;
    plum = 4;
    cherry = 4;
    rabe = 6; 
    document.getElementById("apples").innerHTML = "Apples = " + apple;
    document.getElementById("cherries").innerHTML = "Cherries = " + cherry;
    document.getElementById("pears").innerHTML = "Pears = " + pear;
    document.getElementById("plums").innerHTML = "Plums = " + plum;
}

buttonRollDice.addEventListener( 'click', rollDice, false );

function checkWinner() {
    if (apple < 1 && pear < 1 && cherry <1 && plum <1 && rabe >= 1) {
        status.innerHTML = "Congratulations! You won!" ;
        status.style.color = "#CE4760" ;
        buttonNewGame.disabled = false;
        buttonNewGame.innerHTML="Play again?";
        buttonRollDice.style.display = "none";
    } 
    else if ((apple > 0  || pear  > 0  || cherry  > 0  || plum  > 0)  && rabe < 1) {
        status.innerHTML = "Oh no! The raven won!" ;
        status.style.color = "black" ;
        buttonNewGame.disabled = false;
        buttonNewGame.innerHTML="Play again?";
        buttonRollDice.style.display = "none";
    }
}

function rollDice () {
    console.log((apple + " und" + cherry + "und"+ pear + "und"+ plum + "und"+  rabe));
    checkWinner();
    const side1 = Math.floor( Math.random() * 6 ) + 1;
    switch (side1) {
        case 1:  
        img.src = diceImg[0];
        status.innerHTML = 'You picked an apple';
        apple--;
        if (apple < 1) {
            document.getElementById("apples").innerHTML = "No more apples!"; 
            checkWinner();
            break; 
        } 
        else {
            document.getElementById("apples").innerHTML = "Apples = " + apple;
            return apple;
        }    
        case 2:  
        img.src = diceImg[1];
        status.innerHTML = 'You picked a cherry';
        cherry--;
        if (cherry <1) {
            document.getElementById("cherries").innerHTML = "No more cherries!"; 
            checkWinner();
            break;
        } 
        else {
            document.getElementById("cherries").innerHTML = "Cherries = " + cherry;
            return cherry;
        }    
        case 3:  
        img.src = diceImg[2];
        status.innerHTML = 'You picked a pear';
        pear--;
        if (pear < 1) {
            document.getElementById("pears").innerHTML = "No more pears!"; 
            checkWinner();
            break;
        } 
        else {
            document.getElementById("pears").innerHTML = "Pears = " + pear;
            return pear;
        } 
        case 4:  
        img.src = diceImg[3];
        status.innerHTML = 'You picked a plum';
        plum--;
        if (plum <  1) {
            document.getElementById("plums").innerHTML = "No more plums!"; 
            checkWinner();
            break;
        }
        else {
            document.getElementById("plums").innerHTML = "Plums = " + plum;
            break;
        }
        case 5:  
        img.src = diceImg[4];
        status.innerHTML = 'Oops!! You rolled a raven!';
        rabe --;
        if (rabe == 5) {
            checkWinner();
            document.getElementById("rabe1").style.display = "block";
            return rabe;
        }
        else if (rabe == 4) {
            checkWinner();
            document.getElementById("rabe1").style.display = "none";
            document.getElementById("rabe2").style.display = "block";
            return rabe;
        }
        else if (rabe == 3) {
            checkWinner();
            document.getElementById("rabe2").style.display = "none";
            document.getElementById("rabe3").style.display = "block";
            return rabe;
        }
        else if (rabe == 2) {
            checkWinner();
            document.getElementById("rabe3").style.display = "none";
            document.getElementById("rabe4").style.display = "block";
            return rabe;
        }
        else if (rabe == 1) {
            checkWinner();
            document.getElementById("rabe4").style.display = "none";
            document.getElementById("rabe5").style.display = "block";
            return rabe;
        }
        else if (rabe < 1) {
            checkWinner();
            return rabe;
        } 
        case 6:  
        img.src = diceImg[5];
        status.innerHTML = 'Your rolled a basket! Click the fruit to collect!';
        toggleButtons();
        for (var i=0; i<4; i++) {
            fruitButton[i].disabled == false;
            pickedFruit[i].onclick = true;
            pickedFruit[i].onclick = function() {
            var s = (this.src).replace(/\\/g, '/');
            s = s.substring(s.lastIndexOf('/')+ 1);
            toggleButtons();
            basketFill(s);
            }
        }
    }  
}        


function basketFill(s) {
    switch (s) {
        case "apfel.png": 
            status.innerHTML = 'You chose an apple!';
            apple--;
            if (apple < 1) {
                document.getElementById("apples").innerHTML = "No more apples!";
                checkWinner();
                break;
            }
            else {
                document.getElementById("apples").innerHTML = "Apples = " + apple;   
                return apple;
            }
        
        case "kirsche.png" :
            status.innerHTML = 'You chose a cherry!';
            cherry--;
            if (cherry < 1) {
                document.getElementById("cherries").innerHTML = "No more cherries!";
                checkWinner();
                break;
            }
            else {
                document.getElementById("cherries").innerHTML = "Cherries = " + cherry;   
                return cherry;
            }
        
        case  "birne.png": 
            status.innerHTML = 'You chose a pear!';
            pear--;
            if (pear< 1) {
                document.getElementById("pears").innerHTML = "No more pears!";
                checkWinner();
                break;
            }
            else {
                document.getElementById("pears").innerHTML = "Pears = " + pear;   
                return pear;
            }

        case "pflaume.png": 
            status.innerHTML = 'You chose a plum!';
            plum--;
            if (plum< 1) {
                document.getElementById("plums").innerHTML = "No more plums!";
                checkWinner();
                break;
            }
            else {
                document.getElementById("plums").innerHTML = "Plums = " + plum; 
                return plum;  
        
            }
    }
 }

 function toggleButtons() {
    for (var i=0; i<4; i++) {
        if (fruitButton[i].disabled == true)
        {
        fruitButton[i].disabled = false;
        pickedFruit[i].onclick = false;
        }
        else {
        fruitButton[i].disabled = true;
        pickedFruit[i].onclick = true;
        }
    }
 }
    
   
    



       
    
     
    
