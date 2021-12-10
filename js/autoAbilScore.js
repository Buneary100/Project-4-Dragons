function applyProficiency(id){
    // add proficiency bonus to id
    let idnum = parseInt(document.getElementById(id).value);
    let prof = parseInt(document.getElementById("proficiencyBonus").value);
    document.getElementById(id).value = idnum + prof;
}

function fillSkillModifiers() {

}

function strModifier() {
    let mod = determineModifier(document.getElementById("str").value);
    document.getElementById("strSavingThrow").value = mod;
    document.getElementById("athletics").value = mod;
}

function onChangeAbilityModifier(abil) {
    let score = parseInt(document.getElementById(abil).value);
    let modifier = determineModifier(score)
    let idmodifier = abil + "Modifier";
    document.getElementById(idmodifier).value = modifier;
}

function determineModifier(score) {
    const threshold = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 30];
    modifier = -5;
    for (let i = 0; i < 16; i++) {
        if(score <= threshold[i]){
            if (modifier > 0) {
                modifier = "+" + modifier;
            }
            return modifier;
        }
        modifier++;
    }
}

function fillBaseMod() {
    onChangeAbilityModifier("str");
    onChangeAbilityModifier("dex");
    onChangeAbilityModifier("con");
    onChangeAbilityModifier("int");
    onChangeAbilityModifier("wis");
    onChangeAbilityModifier("char");
}

function fillAbilityScore() {
    document.getElementById("str").value = rollAbilityScore();
    document.getElementById("dex").value = rollAbilityScore();
    document.getElementById("con").value = rollAbilityScore();
    document.getElementById("int").value = rollAbilityScore();
    document.getElementById("wis").value = rollAbilityScore();
    document.getElementById("char").value = rollAbilityScore();
    fillBaseMod();
    strModifier();
}

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