const assert = require('assert');

const input = 
`15
xxxx
VAL
`

const otherInput = 
`16
yyyy
VAR
`

function parse(input) {
	const lines = input.split("\n")
	const output = lines[2].trim()

    return {lines: lines[0], indent: lines[1], output}
}

describe('parser', () => {
	it('should parse header of input', () => {
		assert.deepEqual(
			parse(input), {lines: 15, indent: "xxxx", output: "VAL"}
		);
		assert.deepEqual(
			parse(otherInput), {lines: 16, indent: "yyyy", output: "VAR"}
		);
	});

	it('shuould not indent first line', () => {
		const inputWithIndentation = 
		`16
		yyyy
		 VAR
		`
		assert.equal(parse(input).output, "VAL");
		assert.equal(parse(inputWithIndentation).output, "VAR");
	});
});

