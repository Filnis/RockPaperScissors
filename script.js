function getComputerChoice() {
    let rndNum = Math.floor(Math.random() * 3);
    /* 
    0 - rock
    1 - paper
    2 - scissors
    */
    let cmptChoice = "rock"

    if(rndNum == 1){
        cmptChoice = "paper"
    } else if (rndNum == 2){
        cmptChoice = "scissors"
    }

    return [rndNum, cmptChoice]
}

function choice(e){
    let vicMatrix = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]]

    if(counter === 0){
        resetFunction();
    }

    let choiceValue = e.target.id;
    let computerValue = getComputerChoice();
    userChoice.textContent = choiceValue;
    computerChoice.textContent = computerValue[1];
    
    let userChoiceNum = 0;
    if(choiceValue == "rock"){
        userChoiceNum = 0;
    } else if(choiceValue == "paper"){
        userChoiceNum = 1;
    } else if(choiceValue == "scissor"){
        userChoiceNum = 2;
    }
    
    let winCondition = vicMatrix[userChoiceNum][computerValue[0]];

    if (winCondition == 1){
        userWins++;
    } else if(winCondition == -1){
        cmptWins++;
    };

    message.textContent = `User ${userWins} - Computer ${cmptWins}`

    counter += 1;
    // console.log(counter)

    if (cmptWins === 5 | userWins === 5){
        message.textContent = "game ended";

        let result = `${userWins} - ${cmptWins}`
        if(userWins > cmptWins){
            message.textContent =`User wins ${result}`; 
        } else{
            message.textContent =`User loses ${result}`;
        }

        counter = 0;
        cmptWins = 0;
        userWins = 0;
    }
}

function resetFunction() {
    counter = 0;
    userWins = 0;
    cmptWins = 0;
    message.textContent = "-";
    userChoice.textContent = "-";
    computerChoice.textContent = "-";
}

let counter = 0;
let userWins = 0;
let cmptWins = 0;

let rock = document.getElementById("rock");
rock.addEventListener("click", choice);

let scissor = document.getElementById("scissor");
scissor.addEventListener("click", choice);

let paper = document.getElementById("paper");
paper.addEventListener("click", choice);

let userChoice = document.getElementById("userChoice");
let computerChoice = document.getElementById("computerChoice");
let message = document.getElementById("message");

let reset = document.getElementById("reset");
reset.addEventListener("click", resetFunction);