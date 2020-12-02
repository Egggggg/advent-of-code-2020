const linereader = require("./linereader.js");
const lines = linereader.read();
let valid = 0;

lines.forEach(function(line) {
	line = line.split(" ");

	const range = line[0].split("-").map(num => parseInt(num));
	const char = line[1].replace(":", "");
	const string = line[2];
	let count = 0;
	
	if (string[range[0]-1] == char) {
		count++;
	}

	if (string[range[1]-1] == char) {
		count++;
	}

	if (count == 1) {
		valid++;
	}
});

console.log(valid);