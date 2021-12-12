const abilityScores = ["str", "dex", "con", "int", "wis", "char"];

function applyProficiency(id) {
    // add proficiency bonus to id
    let idnum = parseInt(document.getElementById(id).value);
    let prof = parseInt(document.getElementById("proficiencyBonus").value);
    let checkId = "check" + (id.charAt(0).toUpperCase() + id.slice(1));
    let modifier;
    if (document.getElementById(checkId).checked == true) {
        modifier = idnum + prof;
    } else {
        modifier = idnum - prof;
    }
    if (modifier > 0) {
        modifier = "+" + modifier;
    }
    if (id == "perception") {
        document.getElementById("passivePer").value = modifier;
    }
    document.getElementById(id).value = modifier;
}



function fillSkillModifiers() {
    strModifier();
    dexModifier();
    conModifier();
    intModifier();
    wisModifier();
    charModifier()
}

function strModifier() {
    let mod = determineModifier(document.getElementById("str").value);
    document.getElementById("strSavingThrow").value = mod;
    document.getElementById("athletics").value = mod;
}

function dexModifier() {
    let mod = determineModifier(document.getElementById("dex").value);
    document.getElementById("dexSavingThrow").value = mod;
    document.getElementById("acrobatics").value = mod;
    document.getElementById("sleightOfHand").value = mod;
    document.getElementById("stealth").value = mod;
}

function conModifier() {
    let mod = determineModifier(document.getElementById("con").value);
    document.getElementById("conSavingThrow").value = mod;
}

function intModifier() {
    let mod = determineModifier(document.getElementById("int").value);
    document.getElementById("intSavingThrow").value = mod;
    document.getElementById("arcana").value = mod;
    document.getElementById("history").value = mod;
    document.getElementById("investigation").value = mod;
    document.getElementById("nature").value = mod;
    document.getElementById("religion").value = mod;
}

function wisModifier() {
    let mod = determineModifier(document.getElementById("wis").value);
    document.getElementById("wisSavingThrow").value = mod;
    document.getElementById("animalHandling").value = mod;
    document.getElementById("insight").value = mod;
    document.getElementById("medicine").value = mod;
    document.getElementById("perception").value = mod;
    document.getElementById("survival").value = mod;
    document.getElementById("passivePer").value = mod;
}

function charModifier() {
    let mod = determineModifier(document.getElementById("char").value);
    document.getElementById("charSavingThrow").value = mod;
    document.getElementById("deception").value = mod;
    document.getElementById("intimidation").value = mod;
    document.getElementById("performance").value = mod;
    document.getElementById("persuasion").value = mod;
}

function onChangeAbilityModifier(abil) {
    let score = parseInt(document.getElementById(abil).value);
    let modifier = determineModifier(score)
    let idmodifier = abil + "Modifier";
    document.getElementById(idmodifier).value = modifier;
}

function resetCheckboxes() {
    const boxes = ["checkStrSavingThrow", "checkAthletics",
        "checkDexSavingThrow", "checkAcrobatics", "checkSleightOfHand", "checkStealth",
        "checkConSavingThrow",
        "checkIntSavingThrow", "checkArcana", "checkHistory", "checkInvestigation", "checkNature", "checkReligion",
        "checkWisSavingThrow", "checkAnimalHandling", "checkInsight", "checkMedicine", "checkPerception", "checkSurvival",
        "checkCharSavingThrow", "checkDeception", "checkIntimidation", "checkPerformance", "checkPersuasion"];

    for (let i = 0; i < 24; i++) {
        document.getElementById(boxes[i]).checked = false;
    }
}

function determineModifier(score) {
    const threshold = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 30];
    modifier = -5;
    for (let i = 0; i < 16; i++) {
        if (score <= threshold[i]) {
            if (modifier > 0) {
                modifier = "+" + modifier;
            }
            return modifier;
        }
        modifier++;
    }
}

function fillBaseMod() {
    for (let i = 0; i < 6; i++) {
        onChangeAbilityModifier(abilityScores[i]);
    }
}

function fillAbilityScore() {
    for (let i = 0; i < 6; i++) {
        document.getElementById(abilityScores[i]).value = rollAbilityScore();
    }
    fillBaseMod();
    fillSkillModifiers();
    resetCheckboxes();
}

function fillAbilityScoreAll() {
    fillBaseMod();
    fillSkillModifiers();
    //resetCheckboxes();
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
    for (let i = 0; i < 4; i++) {
        if (i != lowest) {
            total += dice[i];
        }
    }
    return total;
}

function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
} 