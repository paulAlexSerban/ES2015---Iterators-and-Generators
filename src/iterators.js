import 'regenerator-runtime/runtime'; // needs to be imported so generator function would work

class Iterators {
  constructor() {
    this.init();
  }

  setupDOMRefs() {
    this.elements = document.querySelectorAll('*');
  }

  iterators() {
    for (let index in this.elements) {
      this.element = this.elements[index];
      console.log(this.element.tagName);
    }
    /**
     * blindly looping through all the properties of an object;
     * it will log out 'undefined' things that are not elements
     * because it blindly iterates over all the properties, 
     * including the properties defined by the Prototype of that object
     */
    console.log('-------------------------');

    for (let element of this.elements) {
      console.log(element.tagName);
    }
    /**
     * it will log whatever this object has been coded to give us
     * 
     */
    console.log('-------------------------');

    this.persons = {
      name: 'Paul'
    }

    // for(person of this.persons) {
    //   console.log(person);
    // }
    /**
     * because the 'persons' object has no concept of being looped over
     * the iterator will not work
     * this is a great thing because us, as object designer, we want control over
     * wether or not we want to be iterated in the first place
     * and if iterated over, what do we get back 
     */

    console.log('-------------------------');

    for(let item of this.fib()) {
      console.log(`[for of iterator loop] ${item}`)
    }

  }

  // generator function - used to generate iterable objects, objects that can be iterated using [for of iterator]
  // the import at the top is required if the error `regeneratorRuntime is not defined` gets logged
  *fib(max = 10) {
    let last2 = 1,
      last1 = 1;
    for (let i = 0; i < max; i++) {
      const CURRENT = last2;
      last2 = last1;
      last1 += CURRENT;
      console.log(`CALC ${CURRENT}`);
      yield CURRENT;
    }
  };

  init() {
    this.setupDOMRefs();
    this.iterators();
    console.log('[iterators.js] loaded');
  }
}

export default Iterators;