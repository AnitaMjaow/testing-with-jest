var _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
	stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
	return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
	return _.last(stack);
}


// remove or comment out functions push, pop, peek of choice to test missingFunctions in file: ../tests/stack.test.js



