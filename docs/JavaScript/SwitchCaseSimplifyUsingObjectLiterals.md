---
sidebar_position: 1
---

# Switch Case Statement Simplify using Object Literals

```
/*
 function to getMarkRange() using switch case
*/
function getMarkRange(grade) {
  let range;
  //Checking the value of the grade variable and returning the range of the grade using Switch case
  switch (grade) {
    case "A":
      range = "100-70";
      break;
    case "B":
      range = "40-69";
      break;
    case "C":
      range = "0-39";
      break;
  }
  return `range is ${range}`;
}
console.log(getMarkRange("B"));
```

`Output :`
40-69

#### We can use an "Object Lookup Map" instead of a "switch" statement for a cleaner syntax. Above switch statement re-written in Object Lookup map format.

```
/*
 function to getMarkRange() using Object literal
*/
function getMarkRangeWithObjectLiteral(grade) {
  let range = {
    A: "100-70",
    B: "40-69",
    C: "0-39",
  }[grade];
  return `range is ${range}`;
}

console.log(getMarkRange("B"));

```

`Output :`
40-69
