'use strict';

const HashMap = require('./hash-map-practice');

function main() {
  const lor = new HashMap();

  lor.MAX_LOAD_RATIO = 0.5;
  lor.SIZE_RATIO = 3;

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');

  // console.log(lor.get('Hobbit')); // Frodo, the first Hobbit and Maiar get written over because they have the same key.
  // console.log(lor.get('Maiar')); // Sauron,

  return lor;
}
// capacity 24, once capacty hit its initial cap of 8 it tripled its size. 
main();


// 2 this function is taking in key words and seting there value to a
// diffenrent number that is being stored in the hash map;


const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  // console.log(map1.get(str1));
  // console.log(map2.get(str3));
};

// console.log(WhatDoesThisDo());

// 3 


// 1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of 
// length m = 11 using open addressing and a hash function k mod m.
[[22], [88], [], [], [4], [15], [28], [17], [59], [31], [10], []];

// capacity = 24  
// 2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 
// into the hash map with collisions resolved by separate chaining.Let the hash table have a length m = 9, 
// and let the hash function be k mod m.
// console.log(20% 9);
// console.log(33 % 9);[[], [28], [20], [12], [], [5], [15], [], [17], [],];
// console.log(12 % 9);     [19]                       [33]
// console.log(17 % 9);     [10]
// console.log(10 % 9);

//4 Remove duplicates

function removeDuplicates(str) {
  let map = new Map();
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    map.set(str[i]);
  }
  for (let key of map.keys()) {
    newStr += key;
  }
  return newStr;
}

removeDuplicates('google all that you think can think of');


//5. Any permutation a palindrom 

function palindrome(str) {
  let map = new Map();
  let unmatched = false;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (map.has(char)) {
      let value = map.get(char);
      map.set(char, value + 1);
    } else {
      map.set(char, 1);
    }
  }
  for( let value of map.values()){
    if( value % 2 === 1  ){
      if(unmatched){
        return false;
      }else{
        unmatched = true;
      }
    }
  }
  return true;
}
console.log(palindrome('north'));

function removeDuplicates2(str) {
  const stringHolder = new Map();
  let result = '';
  str.split('').forEach(letter => {
    if (!stringHolder.has(letter)) {
      stringHolder.set(letter, '');
      result += letter;
    }
  });
  return result;
}

