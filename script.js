// JavaScript code
function fizzBuzz() {
    var output = '';

    for (var i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz\n';
        } else if (i % 3 === 0) {
            output += 'Fizz\n';
        } else if (i % 5 === 0) {
            output += 'Buzz\n';
        } else {
            output += i + '\n';
        }
    }

    return output;
}

// Display the result using alert
document.getElementById('output').innerText = fizzBuzz();

