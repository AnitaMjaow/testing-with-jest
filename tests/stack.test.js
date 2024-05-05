const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
	expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
	stack.push(1);
	expect(stack.peek()).toBeDefined();
	expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
	stack.push(1);
	stack.push("wow");
	stack.push(42);
	expect(stack.peek()).toBeDefined();
	expect(stack.peek()).toBe(42);
});


const fs = require('fs');
// Using the Node.js built-in module for working with FileSystem 
const path = require('path');
// Using Node.js module to define file directory

test('Expected import statement for stack module to exists in index.js', () => {
	const srcPath = path.resolve(__dirname, '../src');
	// Define the file path
	const indexPath = path.join(srcPath, 'index.js');
	// Define the file name
	const stackImportStatement = "import * as stack from './stack.js';";
	// Define the stack statement
	const testContent = fs.readFileSync(indexPath, 'utf8');
	// Define character set for test file
	const containsImportStatement = testContent.includes(stackImportStatement);
	// Check if the stack import statement exists in index.js
	if (!containsImportStatement) {
		// if containsImportStatement does NOT contain statement show message
		console.error('\x1b[31m', `Error: index.js does not contain the correct import statement: ${stackImportStatement}`);
	}
	expect(containsImportStatement).toBe(true);
	// Jest expect statement toBe(true)
});

test('Check if stack.js contains the functions push, pop, and peek.', () => {
	const missingFunctions = [];
	// list

	if (!stack.hasOwnProperty('push')) {
		missingFunctions.push('push');
		// if this function is missing add to the list missingFunctions
	}
	if (!stack.hasOwnProperty('pop')) {
		missingFunctions.push('pop');
		// if this function is missing add to the list missingFunctions
	}
	if (!stack.hasOwnProperty('peek')) {
		missingFunctions.push('peek');
		// if this function is missing add to the list missingFunctions
	}

	if (missingFunctions.length > 0) {
		// if missingFunctions length is larger than 0 show list
		console.error(`Error: stack.js does not export the following functions: ${missingFunctions.join(', ')}`);
	}
});
