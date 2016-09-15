/**
 * Created by romika on 2016-09-15.
 */

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.33) {
    computerChoice = "rock";
} else if(computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);
var compare = function(userChoice, computerChoice)
{
    if (userChoice === computerChoice)
    {
        return "Result is a tie!";
    }
    else if (userChoice === "rock")
    {
        if (computerChoice === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";
        }
    }
    else if (userChoice === "paper")
    {
        if (computerChoice === "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";
        }
    }
    else
    {
        if (computerChoice === "rock")
        {
            return "rock wins";
        }
        else
        {
            return "scissors wins";
        }
    }
};
callingFunction = compare(userChoice, computerChoice);

