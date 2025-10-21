const repeatString = function(str, num) {
	if (num < 0) {
		return "ERROR"
	} else {
		let total = "";
		for (let i = 0; i < num; i++) {
			total = total + str;

		}
		return total;

	}
};

// Do not edit below this line
module.exports = repeatString;
