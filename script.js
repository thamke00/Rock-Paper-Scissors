let user_score =0;
let comp_score =0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_Score");
const compScorePara = document.querySelector("#comp_Score");

const genCompChoice =() => {
    const option =["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame =() => {
    msg.innerText ="Its draw";
    msg.style.backgroundColor ="#ff9800";
};

const showWinner =(userwin,userChoice,compChoice) => {
    if(userwin){
        user_score++;
        userScorePara.innerText = user_score;
        msg.innerText = `you win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="#4CAF50";
        
    } else {
        comp_score++;
        compScorePara.innerText = comp_score;
        msg.innerText = `you lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="#f44336";
        
    }
};

const playGame = (userChoice) => {
    console.log("user choice :",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice :",compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userwin = true;
        if(userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true ;
        } else if(userChoice === "paper") {
            userwin = compChoice === "scissors" ? false : true ;
        } else {
            userwin = compChoice === "rock" ? false : true ;
        }
         showWinner(userwin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});

