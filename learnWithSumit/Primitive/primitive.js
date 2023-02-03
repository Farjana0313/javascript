var language = {
    name: 'javascript',
    estd: '1995',
    libraries:['React','vue','jquery'],
};
var language2 = {...language};
// language.founder="brendan eich"
language.libraries.push('angular');

console.log(language);
console.log(language2);

// immutably= change na kore