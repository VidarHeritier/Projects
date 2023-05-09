document.getElementById("score-home").innerText = 0;
document.getElementById("score-away").innerText = 0;
document.getElementById("home1").innerText = "+1";
document.getElementById("home2").innerText = "+2";
document.getElementById("home3").innerText = "+3";
document.getElementById("guest1").innerText = "+1";
document.getElementById("guest2").innerText = "+2";
document.getElementById("guest3").innerText = "+3";

let scoreHome = document.getElementById("score-home");
let score1 = 0;
function homeScore1() {
  score1 += 1;
  scoreHome.innerText = score1;
}

let scoreHome2 = document.getElementById("score-home");
function homeScore2() {
  score1 += 2;
  scoreHome.innerText = score1;
}

let scoreHome3 = document.getElementById("score-home");
function homeScore3() {
  score1 += 3;
  scoreHome.innerText = score1;
}

let scoreAway = document.getElementById("score-away");
let scoreA1 = 0;
function awayScore1() {
  scoreA1 += 1;
  scoreAway.innerText = scoreA1;
}

let scoreAway2 = document.getElementById("score-away");
function awayScore2() {
  scoreA1 += 2;
  scoreAway.innerText = scoreA1;
}

let scoreAway3 = document.getElementById("score-away");
function awayScore3() {
  scoreA1 += 3;
  scoreAway.innerText = scoreA1;
}
