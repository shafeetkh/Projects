// Coin Flip Simulation - Write some code that simulates flipping a single coin however many times the user decides. The code should record the outcomes and count the number of tails and heads.

const tails = [];
const heads = [];

function coinflip() {
	let x = Math.random() * 2;
	if (x > 1) {
		heads.push(1);
		let headsTally = heads.reduce((total, amount) => total + amount);
		console.log(`You flipped heads. Total heads flips so far: ${headsTally}`);
	} else {
		tails.push(1);
		let tailsTally = tails.reduce((total, amount) => total + amount);
		console.log(`You flipped tails. Total tails flips so far: ${tailsTally}`);
	}
}

coinflip();
