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
  };
};

let pAequor = pAequorFactory(1, mockUpStrand());
console.log(pAequor);
console.log(pAequor.mutate());






