(function() {
  'use strict';


let battleSim = () => {
  // For testing purposes
  let player1Name = players[0].name;
  let player1Weapon = players[0].weapon;
  let player2Name = "Ogre Bob";
  let player2Weapon = "Machine Gun";
  let player1WeaponDamage = 12;
  let player2WeaponDamage = 10;
  let player1Hitpoints = players[0].hitPoints;
  let player2Hitpoints = Math.floor(Math.random() * 25) + 1;
  // let player2RandomMissfire = Math.random();

  console.log(`${player1Name} hit points: ${player1Hitpoints}`);
  console.log(`${player2Name} hit points: ${player2Hitpoints}`);
  while (player1Hitpoints > 0 && player2Hitpoints > 0) {
    let player1randomMissfire = Math.random();
    let player2RandomMissfire = Math.random();

    console.log(player1randomMissfire.toFixed(2));

    if (player1randomMissfire > .5) {
      console.log(`${player1Name} hit`);
      player1Hitpoints-=player2WeaponDamage;
      console.log(`${player1Name} hit points: ${player1Hitpoints}`);
    } else {
      console.log(`${player1Name} hit points: ${player1Hitpoints}`);
      console.log(`${player1Name} missed!`);
    }

    if (player2RandomMissfire > .5) {
      player2Hitpoints-=player1WeaponDamage;
      console.log(`${player2Name} hit points: ${player2Hitpoints}`);
    } else {
      console.log(`${player2Name} missed!`);
    }
  }
  if (player1Hitpoints > 0) {
    alert(`${player1Name} won!`);
  } else {
    alert(`${player2Name} won!`);
  }
}

///////////////////////////////////////////////CHARACTERS

const players = [
  {
    name: "wizard",
    power: "energy blast",
    weapon: "staff",
    hitPoints: 25,
  }, {
    name: "knight",
    power: "super swing",
    weapon: "sword",
    hitPoints: 30,
  }, {
    name: "lizard man",
    power: "tongue attack",
    weapon: "tongue",
    hitPoints: 20,
  }, {
    name: "cowboy",
    power: null,
    weapon: "revolver",
    hitPoints: 25,
  }, {
    name: "alien",
    power: "probe",
    weapon: "atomizer",
    hitPoints: 30,
  }
];

// you can hard code the dropdown to include a value for each player in the players' array (static) or
// you can iterate over the players array, generate HTML for each player, and inject that into the DOM (dynamic)

// you need an event listener that will fire when a character is selected

let selectedPlayer = null;

const selectPlayer = (event) => {
  const selection = 'wizard';
  const player = players.find(player => player.name === selection);
  selectedPlayer = new Character(player);
}

function Character({ name, power, weapon, hitPoints } = {}) {
  this.name = name;
  this.power = power;
  this.weapon = weapon;
  this.hitPoints = hitPoints;
}

function Enemy({ name, power, weapon, hitPoints } = {}) {
  this.name = name;
  this.power = power;
  this.weapon = weapon;
  this.hitPoints = hitPoints;
}
/////type of character, name of attack, hit points,, attack name for weapon, damage
// const characterOne = new Character("Wizard","Energy Blast","Staff","1000");
// const characterTwo = new Character("Knight","Super Swing","Sword","1100");
// const characterThree = new Character("Lizard Man","Tongue Attack","Tongue","1050");
// const characterFour = new Character("Cowboy","unknown","Revolver","1200");

battleSim();
})();
