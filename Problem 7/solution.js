const linereader = require("./linereader.js");
const lines = linereader.read();

let valid = 0;
let cur = 0;
let fields = ["byr", "iyr", "pid", "eyr", "ecl", "hgt", "hcl"];

lines.forEach(function(line) {
	if (line == "") {
		cur = 0;
	} else {
		for (let word of line.split(" ")) {
			if (fields.indexOf(word.slice(0, 3)) != -1) {
				cur++;
			}
		}

		if (cur == 7) {
			valid++;
			cur = 0;
		}
	}
});

console.log(valid);