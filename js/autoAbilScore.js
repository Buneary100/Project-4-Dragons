function rollAbilityScore() {
const dice = [rollD6(), rollD6(), rollD6(), rollD6()];

 let lowest = 0;
 let lowVal = dice[0];
 for (let i = 1; i < 4; i++) {
     if (dice[i] < lowVal) {
         lowVal = dice[i];
         lowest = i;
     }
 }
 let total = 0;
 for(let i = 0; i < 4; i++) {
     if (i != lowest) {
         total += dice[i];
     }
 }
 return total;
}

function rollD6() {
    return Math.floor(Math.random() * 6 ) + 1;
}