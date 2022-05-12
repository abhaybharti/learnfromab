---
sidebar_position: 1
---

# Array method()

## Mutating Array methods

Mutating array methods are one who mutate (Mutation is basically changing the array itself instead of returning a new array with the new changes) the original array right away, when executed.

It helps in following -

- `Avoid accidentally mutating : ` The original array should not be mutated right away
- `Do Easier mind map : `
- `These mutating methods need to be executed first`

#### Mutating Array Methods list

- `.copywithin() : ` use this to copy elements from within the array. It then replaces the pre-existing elements accordingly.
- .splice()
- .fill()
- .pop()
- .push()
- .reverse()
- .sort()
- .unshift()
- .shift()

```
//How to filter below array which has 'world' in it

/* Creating an array of strings. */
var wordsArray = [
  "hello-world",
  "hello1-world",
  "hello-we-world",
  "hello-hello",
  "jello-bello",
];


/* Filtering the array and returning the array which has the text "world" in it. */
var newArray = wordsArray.filter((wordHavingTextAsWorld) =>
  wordHavingTextAsWorld.includes("world")
);

//or with return statement
newArray = wordsArray.filter((wordHavingTextAsWorld) => {
  return wordHavingTextAsWorld.includes("world");
});

/* Printing the array which has the text "world" in it. */
console.log(newArray);


//Output ->
 //[ 'hello-world', 'hello1-world', 'hello-we-world' ]

```
