---
sidebar_position: 1
---

# Array -> Filter() method

## variable scope->Understanding

Filter() method creates a new array from existing array with elements that pass a test provided by a function. It does not execute the function for empty elements. It method does not change the original array.

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
