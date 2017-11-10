const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
// creates a function that appends an element to the end of the kittens array
// destructive example

function destructivelyAppendKitten(a) {
  kittens.push(a);
  return kittens;
}

// creates a function that prepends an element to the beginning the kittens
// array destructive example
function destructivelyPrependKitten(a) {
  kittens.unshift(a);
  return kittens;
}

// creates a function that removes the last element from the kittens array
// destructive example
function destructivelyRemoveLastKitten(a) {
  kittens.pop(a);
  return kittens;
}

// creates a function that removes the First element from the kittens array
// destructive example
function destructivelyRemoveFirstKitten(a) {
  kittens.shift(a);
  return kittens;
}

//  creates a function that appends an element to the kittens array and returns
// a new array  non-destructive/non mutating example
function appendKitten(a) {
  var kittens = [kittens..., a]
  return kittens;
}

