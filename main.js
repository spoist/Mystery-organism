// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function
let pAequorFactory = (number, strand) => {
  return {
    specimenNum: number,
    dna: strand,
    mutate() {
      const randomDna = Math.floor(Math.random() * 15);
      let newBase;
      // Find the index of the element to modify based on the reference value
      let elementToMutate = this.dna.indexOf(strand[randomDna]);
      do {
        newBase = returnRandBase();
      } while(elementToMutate === newBase);
      // Modify the element at the found index
      this.dna[elementToMutate] = newBase;      
      return this.dna;
    },
    compareDNA(pAequor) {
      let counter = 0;
      for (let i=0; i<15; i++) {
          if (this.dna[i] === pAequor.dna[i]) {
            counter++
          };
        }
      const commonDna = counter / 15 * 100;
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${commonDna}% DNA in common`);
    },
    willLikelySurvive() {
      let counter = 0;
      for (pair of this.dna) {
        if ((pair === 'G') || (pair === 'C')) {
          counter++;
        }
      }
      return (counter/15*100 >= 60);
    }
  };
};

let pAequor1 = pAequorFactory(1, mockUpStrand());
let pAequor2 = pAequorFactory(2, mockUpStrand());
console.log(pAequor2.willLikelySurvive());






