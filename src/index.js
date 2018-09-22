const sum1 = terms => terms.reduceRight((sum, term) => sum + term, 0)

const sum2 = terms => {
  let sum = 0
  for (const term of terms) {
    sum += term
  }
  return sum
}

console.log(sum1([1, 2, 3]))
console.log(sum2([1, 2, 3]))
