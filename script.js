function getRandomInt(){
     return Math.floor((Math.random())*3) + 1;
}

function getComputerChoice(){
    return getRandomInt();       
}


function getHumanChoice(){
    let choice;
    while(true){
        choice = parseInt(prompt("Pick one : \n 1 for Rock \n 2 for Paper \n 3 for Scissor"))
        if (choice === 1 || choice === 2 || choice === 3){
            return choice;
        }
        else{
            alert("Invalid input! Please select 1, 2, or 3.");
        }
    }
    
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){

    if(humanChoice === computerChoice){
        return "It is a tie";}
    else if(humanChoice==1 && computerChoice==2){
        computerScore+=1;
        return "You lose! Paper beats rock";
        
    }
    else if(humanChoice===1 && computerChoice===3){
        humanScore+=1;
        return "You won! Rock beats Scissor.";
    }
    else if(humanChoice===2 && computerChoice===1){
        humanScore+=1;
        return "You won! Paper beats rock.";
    }
    else if(humanChoice===2 && computerChoice===3){
        computerScore+=1;
        return "You lose! Scissor beats paper";
    }
    else if(humanChoice===3 && computerChoice===1){
        computerScore+=1;
        return "You lose! Rock beats scissor";
    }
    else if(humanChoice===3 && computerChoice===2){
        humanScore+=1;
        return "You win! Scissor beats paper";
    }
    else{
        console.log("Please select number from 1,2 & 3");
    }
}
for( let i = 0; i<5; i++){
    console.log(`Round ${i +1}`);
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
}

console.log("-------------------------------------")
console.log(`Final Human Score - ${humanScore}`);
console.log(`Final Computer Score - ${computerScore}`);

if(humanScore>computerScore){
    console.log("You Won !!!");
}
else{
    console.log("You Lose!");
}

