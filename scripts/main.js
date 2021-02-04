console.log("Hello world!");

let battleSim = () => {
  // For testing purposes.
  let player1 = 100;
  let player2 = 50;

  while (player1 > 0 && player2 > 0) {
    player1--;
    player2--;
    console.log(`Player 1 hit points: ${player1}`);
    console.log(`Player 2 hit points: ${player2}`);
  }
  if (player1 > 0) {
    alert("Player 1 wins!");
  } else {
    alert("Player 2 wins!");
  }
}

battleSim();
