const sumAll = function(numOne, numTwo) {

	if (numOne < 0 || numTwo < 0) {
		return "ERROR";
	}
	if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
		return "ERROR";
	}
	let total = 0;
	if (numOne >= numTwo) {
		for (let i = numTwo; i <= numOne; i++) {
			total += i;
		}
	} else {
		for (let i = numOne; i <= numTwo; i++) {
			total += i;
		}
	}

	return total
};


// Do not edit below this line
module.exports = sumAll;
