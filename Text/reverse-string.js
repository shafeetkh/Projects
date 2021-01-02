// reverse a string by word

// FIRST WAY WITH .REVERSE()
// const item = prompt("Enter something");

// const reverse = (str) => {
// 	console.log(str.split("").reverse().join(""));
// };

// reverse(item);

// SECOND WAY WITH REDUCE()

const reverseString = (str) => {
	return str.split("").reduce((acc, val) => val + acc);
};

console.log(reverseString("mother"));
