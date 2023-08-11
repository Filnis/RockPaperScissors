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

function getUserChoice() {
    
    let validChoice = true;
    let userChoice = "";
    let userChoiceNum = 0;

    do {
        validChoice = true;
        userChoice = prompt("Please make a choice").toLowerCase();
        userChoiceNum = 0
        if(userChoice == "rock"){
            userChoiceNum = 0;
        } else if(userChoice == "paper"){
            userChoiceNum = 1;
        } else if(userChoice == "scissors"){
            userChoiceNum = 2;
        } else{
            validChoice = false;
        }
    } while(validChoice == false);

    /* console.log([userChoiceNum, userChoice]) */
    return [userChoiceNum, userChoice];
}

function game(turns){

    let vicMatrix = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]]
    let userWins = 0;
    let cmptWins = 0;

    while(turns > userWins && turns > cmptWins){

        let userPlay = getUserChoice();
        let cmptPlay = getComputerChoice();

        console.log(`User picks ${userPlay[1]} - Computer picks ${cmptPlay[1]}`);

        let winCondition = vicMatrix[userPlay[0]][cmptPlay[0]];

        if (winCondition == 1){
            userWins++;
            console.log("User wins the round");
        } else if(winCondition == -1){
            cmptWins++;
            console.log("Computer wins the round");
        } else{
            console.log("Tie!")
        }

        console.log(`User ${userWins} - Computer ${cmptWins}`)
    }

    let result = `${userWins} - ${cmptWins}`
    if(userWins > cmptWins){
        console.log(`User wins ${result}`)
        return 
    } else{
        console.log(`User loses ${result}`)
    }
}

game(3)