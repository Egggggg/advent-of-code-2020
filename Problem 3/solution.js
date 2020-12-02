const linereader = require("./linereader.js");
const lines = linereader.read();
let valid = 0;

console.log(lines.length);

lines.forEach(function(line) {
	line = line.split(" ");

	const range = line[0].split("-").map(num => parseInt(num));
	const char = line[1].replace(":", "");
	const string = line[2];
	const count = [...string].filter(c => c == char).length

	if (range[0] <= count && count <= range[1]) {
		valid++;
	}
});

console.log(valid);