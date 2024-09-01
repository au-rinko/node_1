const data = require('./package.json');
console.log(`Hello! This is ${data.version} version of @au-rinko/node_1`);

function reversePolishNotation (string) {
    let result = 0;
    const array = string.split(' ');
    const operations = ['+', '-', '*', '/'];
    const stack = [];

    for (let char of array) {
        if (operations.indexOf(char) !== -1) {
            switch (operations.indexOf(char)){
                case 0:
                    result = stack.at(-2) + stack.at(-1);
                    break;
                case 1:
                    result = stack.at(-2) - stack.at(-1);
                    break;
                case 2:
                    result = stack.at(-2) * stack.at(-1);
                    break;
                case 3:
                    result = stack.at(-2) / stack.at(-1);
            }
            stack.pop();
            stack[stack.length - 1] = result;
        } else {
            stack.push(+char);
        }
    }
    return stack[0];
}

module.exports = reversePolishNotation;