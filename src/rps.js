// create prompting fxn & allow users to exit the program
const prompt = require('prompt-sync')({ sigint: true });

let selection,
    botSelection,
    mortalScore = (botScore = 0);
const endMessage = `Thanks, for the mild entertainment, mortal. Pfff`;
const selectionArr = ['rock', 'paper', 'scissors'];
const botBanter = [
    'OMG! How did you earn entrance into my Arena, mortal?',
    `Clearly, this isn't your thing, sweetheart.`,
    `You must've woken up on the wrong side of WTF`,
    `I've beaten so many of you humans they're sending the thrift store versions`,
    `HA! Of course you picked that!`,
    `You lost. Duh.`,
    `Still here? Pfff`,
    `You remind me of a parrot. Polly wanna GET LOST!?`,
];
const soreLoserBanter = [
    `You were allowed to win.`,
    `Luck, is this how you complete your days?`,
];

/*
/
/ FUNCTIONS
/
*/
function arenaFxn() {
    let arenaEnterResponse = arenaEnter.trim().toUpperCase();

    if (arenaEnterResponse === 'Y') {
        //     selection = prompt(`
        // Your fate is sealed. Make your selection.
        // Rock (1)
        // Paper (2)
        // Scissors (3)
        // `);
        //     const randSelectionNum = randNum(selectionArr);
        //     botSelection = selectionArr[randSelectionNum];

        console.log(`
        Your fate is sealed. Make your selection.`);
        selectionPrompt();
    } else if (arenaEnterResponse === 'N') {
        console.log(`
    You are wise.
    Farewell
    `);
    } else {
        arenaEnter = prompt(
            `
        Invalid response, human. Type either Y for yes, or N for no. I recommend you avoid humiliation & type N. 
        `
        );
        if (arenaEnter) {
            arenaFxn();
        }
    }
}
//
function selectionPrompt() {
    selection = prompt(`
    Rock (1)
    Paper (2)
    Scissors (3)
    `);
    const randSelectionNum = randNum(selectionArr);
    botSelection = selectionArr[randSelectionNum];
}
//
function randNum(arr) {
    return Math.floor(Math.random() * arr.length);
}
//
function trashTalk(banterArr) {
    return randNum(banterArr);
}
//
function oneTwoThreeShoot() {
    if (+selection > 0 && +selection < 4) {
        selection = selectionArr[+selection - 1];
        let victor;

        if (selection == 'rock') {
            if (botSelection == 'rock') {
                // tie
                victor = 'no one';
            } else if (botSelection == 'paper') {
                // loss
                victor = 'I';
                botScore++;
            } else {
                // win
                victor = 'you';
                mortalScore++;
            }
        } else if (selection == 'paper') {
            if (botSelection == 'paper') {
                // tie
                victor = 'no one';
            } else if (botSelection == 'scissors') {
                // loss
                victor = 'I';
                botScore++;
            } else {
                // win
                victor = 'you';
                mortalScore++;
            }
        } else {
            if (botSelection == 'scissors') {
                // tie
                victor = 'no one';
            } else if (botSelection == 'rock') {
                // loss
                victor = 'I';
                botScore++;
            } else {
                // win
                victor = 'you';
                mortalScore++;
            }
        }
        console.log(`
        You chose ${selection} & I chose ${botSelection}. This round ${victor} win. 
        SCORES:
        Mortal: ${mortalScore}
        Superior Being: ${botScore}
        `);
        // const playAgain = prompt(`Would you like to play again? (Y/N)`)
    } else {
        console.error(
            `
            Type only the number corresponding to your flawed selection.`
        );
        selectionPrompt();
        oneTwoThreeShoot();
    }
}

/*
/
/  PROMPTS
/
*/
let arenaEnter = prompt(
    `
    😈 Welcome Challenger! You have entered the Rock-Paper-Scissors Battle Arena! 😈
    
    Rock Paper Scissors is a two-player game where each player chooses one of three symbols: Rock 🪨 (1), Paper 📃 (2), or Scissors ✂️ (3). In this case, your opponent is a "bot" 🤖, or a programmed player. 
    
    To select your choice, type 1 for Rock 🪨, 2 for Paper 📃, or 3 for Scissors ✂️. Then press Enter. The bot's 🤖 choice is random, we think 👀. 
    
    Rock will defeat Scissors - 🪨>✂️.
    Paper will defeat Rock - 📃>🪨.
    Scissors will defeat Paper - ✂️>📃.
    
    Human, are you ready? (Y/N)
    `
);

if (arenaEnter) {
    arenaFxn();
}

if (selection) {
    oneTwoThreeShoot();
}
console.log(selection);
console.log(botSelection);

// reset scores at game end !!
