const reverseString = function(str) {
	return str.split("").reduceRight((acc, cur) => acc + cur, "");
};

// Do not edit below this line
module.exports = reverseString;
