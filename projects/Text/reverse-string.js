// reverse a string by word

const item = prompt("Enter something");

const reverse = (str) => {
	console.log(str.split("").reverse().join(""));
};

reverse(item);
