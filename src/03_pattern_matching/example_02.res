type animal = Dog | Cat | Bird

let isBig = true
let myAnimal = Dog

let categoryId = switch (isBig, myAnimal) {
| (true, Dog) => 1
| (true, Cat) => 2
| (true, Bird) => 3
| (false, Dog | Cat) => 4
| (false, Bird) => 5
}

Js.log(categoryId) // 1