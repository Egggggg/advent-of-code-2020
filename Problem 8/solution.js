const linereader = require("./linereader.js");
const lines = linereader.read();

let cur = 0;
let valid = 0;
let fields = {
	"byr": [1920, 2002],
	"iyr": [2010, 2020],
	"eyr": [2020, 2030],
	"hgt": {
		"cm": [150, 193],
		"in": [59, 76]
	},
	"hcl": /(#[a-f0-9]{6})/,
	"ecl": ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"],
	"pid": /([0-9]{9})/
};

lines.forEach(function(line) {
	if (line == "") {
		cur = 0;
	} else {
		for (let word of line.split(" ")) {
			word = word.split(":");
			
			if (["byr", "iyr", "eyr"].indexOf(word[0]) != -1) {
				const value = parseInt(word[1]);

				if (value >= fields[word[0]][0] && value <= fields[word[0]][1]) {
					cur++;
				}
			} else if (word[0] == "hgt") {
				const value = parseInt(word[1].slice(0, -2));
				const unit = word[1].slice(-2);
				
				if (["cm", "in"].indexOf(unit) != -1 && value >= fields["hgt"][unit][0] && value <= fields["hgt"][unit][1]) {
					cur++;
				}
			} else if (["hcl", "pid"].indexOf(word[0]) != -1) {
				if (fields[word[0]].test(word[1]) && fields[word[0]].exec(word[1])[0] == word[1]) {
					cur++;
				}
			} else if (word[0] == "ecl") {
				if (fields["ecl"].indexOf(word[1]) != -1) {
					cur++;
				}
			}
		}

		if (cur == 7) {
			valid++;
			cur = 0;
		}
	}
});

console.log(valid);