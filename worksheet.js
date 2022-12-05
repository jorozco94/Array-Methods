const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP*** - Creates a new array
//1. Get array of all names
const names = characters.map( (character) => character.name );
console.log(names);

//2. Get array of all heights
const heights = characters.map( (character) => character.height );
console.log(heights);

//3. Get array of objects with just name and height properties
const charNameHeight = characters.map( ({name, height}) => { name, height });
console.log(charNameHeight);

//4. Get array of all first names
const firstNames = characters.map( ({name}) => name.split(" ")[0] );
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, curr) => {
    return acc + curr.mass;
}, 0);
console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, curr) => {
    return acc + curr.height;
}, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
//3.1 Given an array of characters (characters ) , and a string, ( eyeColor) , create a function that returns the number of characters that have that eyeColor.  Use reduce .    getEyeColorCount(characters, blue) should return 2;
const getEyeColorCount = function(characters, eyeColor) {
    return characters.reduce( (acc, curr) => {
        return curr.eye_color === eyeColor ? acc + 1 : acc;
    }, 0)
}
console.log(getEyeColorCount(characters, "blue"))

//3.2 Given an array of characters (characters), create a function that returns an object that contains the count of how many characters have each eye color.  Use reduce.  In your case, try not to use eyeColorCount variable and spread operator.  getEyeColorCountObj(characters) should return:
const getEyeColorCountObj = function(characters) {
    return characters.reduce( (acc, curr) => {
        acc.hasOwnProperty(curr.eye_color) ? acc[curr.eye_color]++ : acc[curr.eye_color] = 1;
        return acc;
    }, {})
}
console.log(getEyeColorCountObj(characters))

const eyeColors = characters.reduce((acc, curr) => {
    // nullish coalescing operator - if our property is null/undefined, we return 0, else returns acc[curr.eye_color]
    const eyeColorCount = acc[curr.eye_color] ?? 0;
    return {
        ...acc,
        [curr.eye_color]: eyeColorCount + 1,
    }
}, {});
console.log(eyeColors);

//4. Get total number of characters in all the character names
const totalNameChars = characters.reduce((acc, curr) => {
    // regex to only match letters and nums
    const charMatchRegex = /[a-z0-9]/gi; 
    return acc + curr.name.match(charMatchRegex).length;
}, 0)
console.log(totalNameChars);

//***FILTER*** - Makes a shallow copy of an array
//1. Get characters with mass greater than 100
const bigCharacters = characters.filter( (character) => character.mass > 100 );
console.log(bigCharacters);

//2. Get characters with height less than 200
const shorterCharacters = characters.filter ( (character) => character.height < 200);
console.log(shorterCharacters);

//3. Get all male characters
const maleCharacters = characters.filter ( (character) => character.gender === 'male');
console.log(maleCharacters);

//4. Get all female characters
const femaleCharacters = characters.filter( (character) => character.gender === 'female');
console.log(femaleCharacters);



// ***SORT*** - Sorts elements in place
//1. Sort by mass - ASCENDING
const sortByMass = characters.sort( (a, b) =>  a.mass - b.mass )
console.log(sortByMass);

//2. Sort by height - DESCENDING
const sortByHeight = characters.sort( (a, b) => b.height - a.height );
console.log(sortByHeight);

//3. Sort by name - A to Z
const sortAlpha = characters.sort( (a, b) => {
    return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
});
console.log(sortAlpha);

//4. Sort by gender
const sortGender = characters.sort( (a, b) => {
    return a.gender.localeCompare(b.gender);
});
console.log(sortGender);

//***EVERY*** - Tests if all elements in array pass the callback test, returns a boolean
//1. Does every character have blue eyes?
const isBlueEyes = characters.every((character) => character.eye_color === 'blue');
console.log(isBlueEyes);

//2. Does every character have mass more than 40?
const isGreater40 = characters.every((character) => character.mass > 40 );
console.log(isGreater40);

//3. Is every character shorter than 200?
const isShorter200 = characters.every((character) => character.height < 200 );
console.log(isShorter200);

//4. Is every character male?
const isMale = characters.every((character) => character.gender === 'male');
console.log(isMale);


//***SOME*** - Tests if at least 1 el passes callback test
//1. Is there at least one male character?
const hasMale = characters.some((character) => character.gender === 'male' );
console.log(hasMale);

//2. Is there at least one character with blue eyes?
const hasBlueEye = characters.some((character) => character.eye_color === 'blue');
console.log(hasBlueEye);

//3. Is there at least one character taller than 210?
const hasTaller210 = characters.some((character) => character.height > 210 );
console.log(hasTaller210);

//4. Is there at least one character that has mass less than 50?
const hasMassLess50 = characters.some((character) => character.mass < 50 );
console.log(hasMassLess50);


