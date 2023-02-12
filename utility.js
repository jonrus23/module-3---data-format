export const generateRandomNumber = function(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

console.log(`from utility ${generateRandomNumber(10,100)}`);