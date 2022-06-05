import * as R from "ramda"

const arr = [1, 2, 3, 4]

const sorted = R.sort((a, b) => b - a, arr)

console.log(sorted)