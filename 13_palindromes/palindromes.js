const palindromes = function(inputString) {
	const cleaned = inputString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
	const revStr = cleaned.split("").reverse().join('');
	return cleaned === revStr;


};

// Do not edit below this line
module.exports = palindromes;
