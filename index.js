const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
// creates a function that appends an element to the end of the kittens array
// destructive

function destructivelyAppendKitten(a) {
  kittens.push(a);
  return kittens;
}

// creates a function that prepends an element to the beginning the kittens
// array destructive

function destructivelyPrependKitten(a) {
  kittens.unshift(a);
  return kittens;
}
