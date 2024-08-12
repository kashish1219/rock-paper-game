function getRandomInt(){
    return Math.floor(Math.random()*3) +1;
}

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    return choices[getRandomInt()-1];
}


function getHumanChoice(){
    let choice;
    while(true){
        choice = prompt("PICK ONE \n Rock, Paper or Scissor");
        if (choice === null) {
            return null;
        }
        choice = choice.toLowerCase();
        if(choice ==="rock" || choice ==="paper" || choice ==="scissor"){
            return choice;
        }
        else {
            alert("Check spelling/Enter a valid response")
        }
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It is a tie";}
    else if(humanChoice=="rock" && computerChoice=="paper"){
        computerScore+=1;
        return "You lose! Paper beats rock";
        
    }
    else if(humanChoice==="rock" && computerChoice==="scissor"){
        humanScore+=1;
        return "You won! Rock beats Scissor.";
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        humanScore+=1;
        return "You won! Paper beats rock.";
    }
    else if(humanChoice==="paper" && computerChoice==="scissor"){
        computerScore+=1;
        return "You lose! Scissor beats paper";
    }
    else if(humanChoice==="scissor" && computerChoice==="rock"){
        computerScore+=1;
        return "You lose! Rock beats scissor";
    }
    else if(humanChoice==="scissor" && computerChoice==="paper"){
        humanScore+=1;
        return "You win! Scissor beats paper";
    }
}

for(let i=0; i<5; i++){
    let humanSelection = getHumanChoice();
    if(humanSelection === null){
        alert("Game Cancelled");
        break;
    }
    let computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    
    console.log(`Round ${i + 1}: ${result}`);
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    
    
}
console.log("-------------------------------------")
console.log(`Final Human Score - ${humanScore}`);
console.log(`Final Computer Score - ${computerScore}`);

if(humanScore > computerScore){
    console.log("You Won !!!");
} 
else if(humanScore < computerScore){
    console.log("You Lose!");
} 
else {
    console.log("It's a tie!");
}