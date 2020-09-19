//solution 1 and clever



const countDevelopers = list => list.filter((obj) => obj.continent === 'Europe'&& obj.language === 'JavaScript').length;

// solution 2 Meeting # 2

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

function greetDevelopers(list) {
   list.forEach(obj=> obj.greeting= `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`)
  return list
}

// solution 2 Meeting #2 Clever

const greetDevelopers = list => list.map(dev => ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`}));
