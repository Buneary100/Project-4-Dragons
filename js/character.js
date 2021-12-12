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

const abilityScoresArray = [ "str", "dex", "con", "int", "wis", "char"];
let sheetInfo = [characterName, classLevel, background, playerName, race, alignment, hitDice, otherProficiencies, features, equipment, attackName1, attackName2, attackName3, attackBonus1, attackBonus2, attackBonus3, attackDamage1, attackDamage2, attackDamage3, experiencePoints, proficiencyBonus, strength, dexterity, constitution, Intelligence, Wisdom, Charisma, hitPointMaximum, currentHitPoints, armor, tempHitPoints, speed, initiative, platinum, gold, silver, copper];
let proficiencyInfo = [strengthSave, dexteritySave, constitutionSave, IntelligenceSave, WisdomSave, CharismaSave, athletics, acrobatics, sleightOfHand, stealth, arcane, history, investigation, nature, religion, animalHandling, insight, medicine, perception, survival, deception, intimidation, performance, persuasion];
let result = [];
//*************************** */

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
                    if(result[i] = '0')
                    {
                        proficiencyInfo[i-1].checked = false;
                    }
                    else{
                        proficiencyInfo[i-1].checked = true;
                    }
                }
            }
        });
    result.splice(0,result.length);
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
                    if (i - 1 > 18) {
                        sheetInfo[i - 1].value = (result[i]);
                    }
                    else {
                        sheetInfo[i - 1].innerHTML = result[i];
                    }
                }
            }
            result.splice(0,result.length);
        });
    proficiency();
}

//fillAbilityScoreAll();