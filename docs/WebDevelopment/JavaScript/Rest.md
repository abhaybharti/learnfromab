---
sidebar_position: 1
---

# rest syntax

## Array Destructuring using rest syntax

Array destructuring is flexible. It uses less space, and even allows you to ignore values. You can even get the remaining elements as a new array.
Instead of accessing elements individually, one by one, you can get multiple at once.

```
const kidsName = ["Govind","Gopal","Pari","Kanhu","Aayu"]

//traditional way of accessing array values
const firstValue = kidsName[0];
const secondValue = kidsName[1];
console.log(firstValue);
console.log(secondValue);
```

```
const [firstValue, ,thirdValue, ...rest] = kidsName

console.log(firstValue);
console.log(thirdValue);
console.log(rest);
```

`Output:`
Govind
Pari
[ 'Kanhu', 'Aayu' ]

## Receiving Data using rest syntax

A rest parameter is a special kind of parameter that receives all remaining arguments of a function call via array.

```
function myFunc(first, ...remaining) {
  return {first, remaining}
}

console.log(myFunc(1,2,3))
```

`Output:`
{ first: 1, remaining: [ 2, 3 ] }

## Object Destructuring using rest syntax

```
const {first:f, ...remaining} = {first:'Kanhu', last:'Pari', age:5}

console.log(f)
console.log(remaining)
```

`Output:`
Kanhu
{ last: 'Pari', age: 5 }
