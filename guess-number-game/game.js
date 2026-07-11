let gamenum = 25;
let usernum = prompt("Guess the game number");
 while (usernum != gamenum) {
     usernum = prompt("you enter wrong number try again");
 }
console.log("🎉congratulation! your number is right.");