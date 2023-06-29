// create prompting fxn & allow users to exit the program
const prompt = require('prompt-sync')({ sigint: true });

let selection,
    botSelection,
    playAgainPrompt,
    mortalScore = (botScore = 0);
const playErrorMssg = `Invalid response, human. Type either Y for yes, or N for no. I recommend you avoid humiliation & type N. `;
const endMessage1 = `
Thanks, for the mild entertainment, mortal. Pfff
`;
const selectMssg = `Make your selection.`;
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
        console.log(`
        Your fate is sealed. ${selectMssg}`);
        selectionPrompt();
    } else if (arenaEnterResponse === 'N') {
        console.log(`
    You are wise.
    Farewell
    `);
    } else {
        arenaEnter = prompt(
            `
       ${playErrorMssg}
        `
        );
        if (arenaEnter) {
            arenaFxn();
        }
    }
    return;
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
    return;
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
        You chose ${selection} & I chose ${botSelection}. This round ${victor} won. 
        SCORES:
        Mortal: ${mortalScore}
        Superior Being: ${botScore}
        `);

        playAgainPrompt = prompt(`Would you like to play again? (Y/N)`);
        playAgainFxn();
    } else {
        console.error(
            `
            Type only the number corresponding to your flawed selection.`
        );
        selectionPrompt();
        oneTwoThreeShoot();
    }
    return;
}
//
function playAgainFxn() {
    const playAgainResponse = playAgainPrompt.trim().toUpperCase();
    if (playAgainResponse.length === 1) {
        if (playAgainResponse == 'Y') {
            // if y, then
            // prompt selection fxn again
            // trash talk for this?
            console.log(`
            ${selectMssg}`);
            selectionPrompt();
            oneTwoThreeShoot();
        } else if (playAgainResponse == 'N') {
            // if n, then
            console.log(endMessage1);
        } else {
            playAgainPrompt = prompt(`
            ${playErrorMssg}
            `); // what is wrong here? see color
            if (playAgainPrompt) {
                playAgainFxn();
            }
        }
    } else {
        playAgainPrompt = prompt(`
        ${playErrorMssg}
        `);
        if (playAgainPrompt) {
            playAgainFxn();
        }
    }
    return;
}

/*
/
/  PROMPTS ?? 
/
*/
let arenaEnter = prompt(
    `
    😈 Welcome Challenger! You have entered the Rock-Paper-Scissors Battle Arena! 😈
    
    Rock Paper Scissors is a two-player game where each player chooses one of three symbols: Rock 🪨 (1), Paper 📃 (2), or Scissors ✂️ (3). In this case, your opponent is a Superior Being 🤖, but my friends call me Bot. (You are foe, not friend, btw).
    
    To select your choice, type 1 for Rock 🪨, 2 for Paper 📃, or 3 for Scissors ✂️.
    Press Enter after typing your response to the prompts.
    My 🤖 choice is randomly generated, so they think 👀. 
    
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

// console.log(selection);
// console.log(botSelection);

/*
/
/ TICKET WORK
/
*/
// MUST FOR ASSIGNMENT
//      // when user chooses to end the game, show final score
// the prompts print per key typed. fix.
// check the "see color" issue
// add trash talk for choosing to play again
// add fxnality for streaks
//      // such as different trash talking
//              // esp for comebacks

// !! reset scores at game end !! - auto resets b/c no more prompts & to get prompts, have to call file in cli again
