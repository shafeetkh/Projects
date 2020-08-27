// Tax Calculator - Asks the user to enter a cost and either a country or state tax.
// It then returns the tax plus the total cost with tax.

function purchase() {
	let cost = parseFloat(prompt("How much does your product cost?"));
	let taxPercent = parseFloat(prompt("What is your state's tax percent?"));
	let taxed = (taxPercent / 100) * cost;
	let total = taxed + cost;

	console.log(`Your total with tax is: $${total.toFixed(2)}`);
}

purchase();
