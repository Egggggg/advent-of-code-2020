const fs = require("fs");

function read() {
	return fs.readFileSync("input.txt", "utf-8").split("\r\n")
}

exports.read = read