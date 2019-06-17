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
