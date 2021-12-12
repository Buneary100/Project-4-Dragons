let characterName = document.querySelector('#characterName');
let classLevel = document.querySelector('#classAndLevel');
let race = document.querySelector('#race');
let background = document.querySelector('#background');
let alignment = document.querySelector('#alignment');
let playerName = document.querySelector('#playerName');
let experiencePoints = document.querySelector('#experiencePoints');
let proficiencyBonus = document.querySelector('#proficiencyBonus');

let strength = document.querySelector('#str');
let strengthSave = document.querySelector('#checkStrSavingThrow');
let dexterity = document.querySelector('#dex');
let dexteritySave = document.querySelector('#checkDexSavingThrow');
let constitution = document.querySelector('#con');
let constitutionSave = document.querySelector('#checkConSavingThrow');
let Intelligence = document.querySelector('#int');
let IntelligenceSave = document.querySelector('#checkIntSavingThrow');
let Wisdom = document.querySelector('#wis');
let WisdomSave = document.querySelector('#checkWisSavingThrow');
let Charisma = document.querySelector('#char');
let CharismaSave = document.querySelector('#checkCharSavingThrow');

let athletics = document.querySelector('#checkAthletics');
let acrobatics = document.querySelector('#checkAcrobatics');
let sleightOfHand = document.querySelector('#checkSleightOfHand');
let stealth = document.querySelector('#checkStealth');
let arcane = document.querySelector('#checkArcana');
let history = document.querySelector('#checkHistory');
let investigation = document.querySelector('#checkInvestigation');
let nature = document.querySelector('#checkNature');
let religion = document.querySelector('#checkReligion');
let animalHandling = document.querySelector('#checkAnimalHandling');
let insight = document.querySelector('#checkInsight');
let medicine = document.querySelector('#checkMedicine');
let perception = document.querySelector('#checkPerception');
let survival = document.querySelector('#checkSurvival');
let deception = document.querySelector('#checkDeception');
let intimidation = document.querySelector('#checkIntimidation');
let performance = document.querySelector('#checkPerformance');
let persuasion = document.querySelector('#checkPersuasion');
let otherProficiencies = document.querySelector('#otherProficienciesAndLanguages');

let armor = document.querySelector('#armorClass');
let initiative = document.querySelector('#initiative');
let speed = document.querySelector('#speed');

let hitPointMaximum = document.querySelector('#hitPointMaximum');
let currentHitPoints = document.querySelector('#currentHitPoints');
let tempHitPoints = document.querySelector('#tempHitPoints');
let hitDice = document.querySelector('#hitDice');

let attackName1 = document.querySelector('#attacksAndSpellcastingNameOne');
let attackName2 = document.querySelector('#attacksAndSpellcastingNameTwo');
let attackName3 = document.querySelector('#attacksAndSpellcastingNameThree');

let attackBonus1 = document.querySelector('#attacksAndSpellcastingAtkBonusOne');
let attackBonus2 = document.querySelector('#attacksAndSpellcastingAtkBonusTwo');
let attackBonus3 = document.querySelector('#attacksAndSpellcastingAtkBonusThree');

let attackDamage1 = document.querySelector('#attacksAndSpellcastingDamageOrTypeOne');
let attackDamage2 = document.querySelector('#attacksAndSpellcastingDamageOrTypeTwo');
let attackDamage3 = document.querySelector('#attacksAndSpellcastingDamageOrTypeThree');

let equipment = document.querySelector('#equipmentAndCharacterNotes');
let features = document.querySelector('#featuresAndTraits');

let copper = document.querySelector('#copperPieces');
let silver = document.querySelector('#silverPieces');
let gold = document.querySelector('#goldPieces');
let platinum = document.querySelector('#platinumPieces');

const abilityScoresArray = ["str", "dex", "con", "int", "wis", "char"];
let sheetInfo = [characterName, classLevel, background,
    playerName, race, alignment, hitDice,
    otherProficiencies, features, equipment,
    attackName1, attackName2, attackName3,
    attackBonus1, attackBonus2, attackBonus3,
    attackDamage1, attackDamage2, attackDamage3,
    experiencePoints, proficiencyBonus, strength,
    dexterity, constitution, Intelligence, Wisdom,
    Charisma, hitPointMaximum, currentHitPoints,
    armor, tempHitPoints, initiative, speed,
    platinum, gold, silver, copper];
let proficiencyInfo = [strengthSave, dexteritySave,
    constitutionSave, IntelligenceSave, WisdomSave,
    CharismaSave, athletics, acrobatics, sleightOfHand,
    stealth, arcane, history, investigation, nature,
    religion, animalHandling, insight, medicine,
    perception, survival, deception, intimidation,
    performance, persuasion];
let result = [];
//*************************** */

function save() {
    const url = "http://localhost:3000/save";

    const dataObject = {
        characterName: sheetInfo[0].value,
        classLevel: sheetInfo[1].value,
        background: sheetInfo[2].value,
        playerName: sheetInfo[3].value,
        race: sheetInfo[4].value,
        alignment: sheetInfo[5].value,
        hitDice: sheetInfo[6].value,
        otherProficiencies: sheetInfo[7].value,
        features: sheetInfo[8].value,
        equipment: sheetInfo[9].value,
        attackName1: sheetInfo[10].value,
        attackName2: sheetInfo[11].value,
        attackName3: sheetInfo[12].value,
        attackBonus1: sheetInfo[13].value,
        attackBonus2: sheetInfo[14].value,
        attackBonus3: sheetInfo[15].value,
        attackDamage1: sheetInfo[16].value,
        attackDamage2: sheetInfo[17].value,
        attackDamage3: sheetInfo[18].value,
        experiencePoints: sheetInfo[19].value,
        proficiencyBonus: sheetInfo[20].value,
        strength: sheetInfo[21].value,
        dexterity: sheetInfo[22].value,
        constitution: sheetInfo[23].value,
        Intelligence: sheetInfo[24].value,
        Wisdom: sheetInfo[25].value,
        Charisma: sheetInfo[26].value,
        hitPointMaximum: sheetInfo[27].value,
        currentHitPoints: sheetInfo[28].value,
        armor: sheetInfo[29].value,
        tempHitPoints: sheetInfo[30].value,
        initiative: sheetInfo[31].value,
        speed: sheetInfo[32].value,
        platinum: sheetInfo[33].value,
        gold: sheetInfo[34].value,
        silver: sheetInfo[35].value,
        copper: sheetInfo[36].value,

        strengthSave: proficiencyInfo[0].checked,
        dexteritySave: proficiencyInfo[1].checked,
        constitutionSave: proficiencyInfo[2].checked,
        IntelligenceSave: proficiencyInfo[3].checked,
        WisdomSave: proficiencyInfo[4].checked,
        CharismaSave: proficiencyInfo[5].checked,
        athletics: proficiencyInfo[6].checked,
        acrobatics: proficiencyInfo[7].checked,
        sleightOfHand: proficiencyInfo[8].checked,
        stealth: proficiencyInfo[9].checked,
        arcane: proficiencyInfo[10].checked,
        history: proficiencyInfo[11].checked,
        investigation: proficiencyInfo[12].checked,
        nature: proficiencyInfo[13].checked,
        religion: proficiencyInfo[14].checked,
        animalHandling: proficiencyInfo[15].checked,
        insight: proficiencyInfo[16].checked,
        medicine: proficiencyInfo[17].checked,
        perception: proficiencyInfo[18].checked,
        survival: proficiencyInfo[19].checked,
        deception: proficiencyInfo[20].checked,
        intimidation: proficiencyInfo[21].checked,
        performance: proficiencyInfo[22].checked,
        persuasion: proficiencyInfo[23].checked
    };

    const fetchObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObject)
    };

    //perform fetch on url with parameters (query String on GET)
    fetch(url, fetchObject)
        .then(response => response.json())               // obtain json object sent from server
        .then(jsonObject => {                            // use jsonObject and get its message property
            console.log(jsonObject.message);   // set innerHTML of span to message sent in jsonObject
        });
    result.splice(0, result.length);
}

function proficiency() {
    const url = "http://localhost:3000/setProficiency";

    const fetchObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(dataObject)
    };

    //perform fetch on url with parameters (query String on GET)
    fetch(url, fetchObject)
        .then(response => response.json())               // obtain json object sent from server
        .then(jsonObject => {                            // use jsonObject and get its message property
            console.log(jsonObject.message);   // set innerHTML of span to message sent in jsonObject
            for (var i in jsonObject.message)
                result.push(jsonObject.message[i]);

            for (var i = 1; i < result.length - 1; i++) {
                if (result[i] != null) {
                    if (result[i] == 0) {
                        if(proficiencyInfo[i-1].checked == true)
                        {
                            proficiencyInfo[i - 1].click();
                        }
                        proficiencyInfo[i - 1].checked = false; 
                    }
                    else {
                        if(proficiencyInfo[i-1].checked == false)
                        {
                            proficiencyInfo[i - 1].click();
                        }
                        proficiencyInfo[i - 1].checked = true;
                    }
                }
            }
        });
    loadProficiency();
    result.splice(0, result.length);
}

function start() {
    const url = "http://localhost:3000/setPage";

    const fetchObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(dataObject)
    };

    //perform fetch on url with parameters (query String on GET)
    fetch(url, fetchObject)
        .then(response => response.json())               // obtain json object sent from server
        .then(jsonObject => {                            // use jsonObject and get its message property
            console.log(jsonObject.message);   // set innerHTML of span to message sent in jsonObject
            for (var i in jsonObject.message)
                result.push(jsonObject.message[i]);

            for (var i = 1; i < result.length - 1; i++) {
                if (result[i] != null) {
                    if (i >= 20) {
                        sheetInfo[i - 1].value = Number(result[i]);
                    }
                    else {
                        sheetInfo[i - 1].value = result[i];
                    }
                }
            }

            result.splice(0, result.length);
        });
}

function loadProficiency()
{
    fillAbilityScoreAll();
}
window.onload = start;