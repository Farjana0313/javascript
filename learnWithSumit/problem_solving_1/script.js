const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function (a, b) {
    return b - a
}))

console.log(points.sort(function () {
    return 0.5 - Math.random()
}))


// leap year
function isLeapYear(year) {
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
isLeapYear(2028);

// vowel finder

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value, index, array){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;

}
console.log(countVowels("I love Bangladesh"));

// Duplicate Number
const numbers=[1,2,4,5,4,6,7,8,8,9,7];

const duplicates = numbers.filter(function(value,index,array){
    return array.indexOf(value)!==index
});
console.log(duplicates);

// Unique number
const uniques = numbers.filter(function(value,index,array){
    return array.indexOf(value) ===index
});
console.log(uniques);