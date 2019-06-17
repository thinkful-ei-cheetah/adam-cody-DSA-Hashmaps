'use strict';

const HashMap = require('./hash-map-practice');

function main(){
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

  console.log(lor.get('Hobbit')); // Frodo, the first Hobbit and mair get written over because they have the same key.
  console.log(lor.get('Maiar')); // Sauron,

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

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// console.log(WhatDoesThisDo());

