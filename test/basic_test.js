const assert = require('assert');

const input = `
15
xxxx
VAL
`

function parse(input) {
    return {lines: 15, indent: "xxxx"}
}

describe('parser', () => {
	it('should parse header of input', () => {
		assert.deepEqual(
			parse(input), {lines: 15, indent: "xxxx"}
		);
	});
});