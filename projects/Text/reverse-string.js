// reverse a string by word

function wordSplit() {
	let str = prompt("Enter a string: ");
	let strSplit = str.split(" ");
	let result = strSplit.reverse().join(" ");

	console.log(result);
}

wordSplit();
