const assert = require('assert');

const input = 
`15
xxxx
VAL
`

const otherInput = 
`16
yyyy
VAL
`

function parse(input) {
	const lines = input.split("\n")

    return {lines: lines[0], indent: lines[1]}
}

describe('parser', () => {
	it('should parse header of input', () => {
		assert.deepEqual(
			parse(input), {lines: 15, indent: "xxxx"}
		);
		assert.deepEqual(
			parse(otherInput), {lines: 16, indent: "yyyy"}
		);
	});
});

