function buildArray(n) {
    let array = []
    for (let i = 0; i < n; i++) {

        array.push(parseInt(Math.random() * 100));
    }
    return array;
}

function countAboveAverage(array) {
    let sum = array.reduce((acc, num) => acc + num, 0)
    let average = sum / array.length;
    let count = array.filter(num => num > average).length;
    return count
}

function hasPairWithSum(array, N) {
    let seenNumbers = new Set();
    for (let num of array) {
        let complement = N - num;
        if
            (seenNumbers.has(complement)) {
            return true;
        }
        seenNumbers.add(num);
    }
    return false;
}

let array = buildArray(10);
console.log("Vetor:", array);
console.log("Quantidade de numeros acima da media:",
    countAboveAverage(array));
console.log("Existe par com soma igual a N (por exemplo,50):",
    hasPairWithSum(array, 50));