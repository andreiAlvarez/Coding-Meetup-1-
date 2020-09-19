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


// solution 3 Meeting # 3 Clever

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

const isRubyComing = list => list.some(obj=>obj.language==='Ruby'); 

// solution 4 Meeting # 4

const getFirstPython = list => {
   let dev=list.find(obj=>obj.language==='Python')
  return dev?`${dev.firstName}, ${dev.country}`:'There will be no Python developers'
}

// solution 4 Meeting #4 clever
getFirstPython=a=>(a=>a.length?`${a[0].firstName}, ${a[0].country}`:'There will be no Python developers')(a.filter(({language:l})=>l[1]=='y'));
