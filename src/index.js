const sum = terms => terms.reduceRight((sum, term) => sum + term, 0)

console.log(sum([1, 2, 3]))
