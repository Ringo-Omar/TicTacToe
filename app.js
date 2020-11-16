const xSymbol = "x";
const oSymbol = "o";

let xTurn = true;

let xVictory = false;
let oVictory = false;
let draw = false;

let leftScore = 0;
let rightScore = 0;

const xPoints = document.getElementById("xcount");
const oPoints = document.getElementById("ocount");


let ruutus = document.getElementsByClassName("ruutu");
const message = document.getElementById("viesti");

xPoints.innerHTML = leftScore;
oPoints.innerHTML = rightScore;


const gameStart = function(e){
    if(xTurn === true){
        message.innerHTML = "X: Select your square."
    }
    else{
        message.innerHTML = "O: Select your square."
    }
    for (let i = 0; i < ruutus.length; i++){
        ruutus[i].classList.add("active");
        ruutus[i].onclick = function(event){
            if(xTurn === true && ruutus[i].innerHTML === ""){
                message.innerHTML = "O: Select your square."
                event.target.innerHTML = xSymbol;
                xTurn = false;
                xVictoryCheck();
                drawCheck();
            }
            else if(ruutus[i].innerHTML === ""){
                message.innerHTML = "X: Select your square."
                event.target.innerHTML = oSymbol;
                xTurn = true;
                oVictoryCheck();
                drawCheck();
            }
            
        }
    }
    
}


const xVictoryCheck = function(){
    if(document.getElementById("ruutu1").innerHTML === xSymbol && 
    document.getElementById("ruutu2").innerHTML === xSymbol && 
    document.getElementById("ruutu3").innerHTML === xSymbol ||

    document.getElementById("ruutu4").innerHTML === xSymbol &&
    document.getElementById("ruutu5").innerHTML === xSymbol &&
    document.getElementById("ruutu6").innerHTML === xSymbol ||

    document.getElementById("ruutu7").innerHTML === xSymbol &&
    document.getElementById("ruutu8").innerHTML === xSymbol &&
    document.getElementById("ruutu9").innerHTML === xSymbol ||

    document.getElementById("ruutu1").innerHTML === xSymbol &&
    document.getElementById("ruutu5").innerHTML === xSymbol &&
    document.getElementById("ruutu9").innerHTML === xSymbol ||

    document.getElementById("ruutu3").innerHTML === xSymbol &&
    document.getElementById("ruutu5").innerHTML === xSymbol &&
    document.getElementById("ruutu7").innerHTML === xSymbol ||

    document.getElementById("ruutu1").innerHTML === xSymbol &&
    document.getElementById("ruutu4").innerHTML === xSymbol &&
    document.getElementById("ruutu7").innerHTML === xSymbol ||

    document.getElementById("ruutu2").innerHTML === xSymbol &&
    document.getElementById("ruutu5").innerHTML === xSymbol &&
    document.getElementById("ruutu8").innerHTML === xSymbol ||

    document.getElementById("ruutu3").innerHTML === xSymbol &&
    document.getElementById("ruutu6").innerHTML === xSymbol &&
    document.getElementById("ruutu9").innerHTML === xSymbol){
        xVictory = true;
        console.log(xVictory);
        xVictoryDeclaration();
    }
    
}

const oVictoryCheck = function(){
    if(document.getElementById("ruutu1").innerHTML === oSymbol && 
    document.getElementById("ruutu2").innerHTML === oSymbol && 
    document.getElementById("ruutu3").innerHTML === oSymbol ||

    document.getElementById("ruutu4").innerHTML === oSymbol &&
    document.getElementById("ruutu5").innerHTML === oSymbol &&
    document.getElementById("ruutu6").innerHTML === oSymbol ||

    document.getElementById("ruutu7").innerHTML === oSymbol &&
    document.getElementById("ruutu8").innerHTML === oSymbol &&
    document.getElementById("ruutu9").innerHTML === oSymbol ||

    document.getElementById("ruutu1").innerHTML === oSymbol &&
    document.getElementById("ruutu5").innerHTML === oSymbol &&
    document.getElementById("ruutu9").innerHTML === oSymbol ||

    document.getElementById("ruutu3").innerHTML === oSymbol &&
    document.getElementById("ruutu5").innerHTML === oSymbol &&
    document.getElementById("ruutu7").innerHTML === oSymbol ||

    document.getElementById("ruutu1").innerHTML === oSymbol &&
    document.getElementById("ruutu4").innerHTML === oSymbol &&
    document.getElementById("ruutu7").innerHTML === oSymbol ||

    document.getElementById("ruutu2").innerHTML === oSymbol &&
    document.getElementById("ruutu5").innerHTML === oSymbol &&
    document.getElementById("ruutu8").innerHTML === oSymbol ||

    document.getElementById("ruutu3").innerHTML === oSymbol &&
    document.getElementById("ruutu6").innerHTML === oSymbol &&
    document.getElementById("ruutu9").innerHTML === oSymbol){
        oVictory = true;
        console.log(oVictory);
        oVictoryDeclaration();
    }
    
}

const xVictoryDeclaration = function(){
    if(xVictory === true){
        message.innerHTML = "X is victorious!";
        for (let i = 0; i < ruutus.length; i++){
            ruutus[i].innerHTML="";
            xTurn = false;
            setTimeout(gameStart, 2000);
        }
        addScore();
        xVictory = false;
    }
}

const oVictoryDeclaration = function(){
    if(oVictory === true){
        message.innerHTML = "O is victorious!";
        for (let i = 0; i < ruutus.length; i++){
            ruutus[i].innerHTML="";
            setTimeout(gameStart, 2000);
        }
        addScore();
        oVictory = false;
    }
}

const addScore = function(){
    if(xVictory === true){
        leftScore++;
        xPoints.innerHTML = leftScore;
    }
    else if(oVictory === true){
        rightScore++;
        oPoints.innerHTML = rightScore;
    }
}

const drawCheck = function(){
    if (xVictory === false && oVictory === false){
        let empty = false;
        let i=0;
            while(empty === false && i<ruutus.length){
                if(ruutus[i].innerHTML === ""){
                    empty = true;
                } /* if(i === ruutus.length-1){
                    draw = true;
                    empty = true;
                } */
            i++
            }
        if(empty === false){
            draw = true;
            drawDeclaration();
        }
    }
}

const drawDeclaration = function(){
    if(draw === true){
        message.innerHTML = "Draw!";
        for (let i = 0; i < ruutus.length; i++){
            ruutus[i].innerHTML="";
            setTimeout(gameStart, 2000);
            draw = false;
        }
    }
}


const resetGame = function(){
    for (let i = 0; i < ruutus.length; i++){
        ruutus[i].innerHTML="";
    }
    
}