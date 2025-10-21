const removeFromArray = function(arr, ...valuesToRemove) {
	return arr.filter(item => !valuesToRemove.includes(item));
	// if item is in values to remove, set to false
};

// Do not edit below this line
module.exports = removeFromArray;
