---
sidebar_position: 1
---

# variablescope->Understanding

## variable scope->Understanding

```
/* Declaring a variable in the global scope. its life span is whole program */
var globalScopeVariable = 7;

function test() {
  /* Declaring a variable in the function scope. It's life span is in function only*/
  var functionScopeVariable = 10;

  /* Declaring a variable in the local scope, inside a for loop. It's life span is inside for loop only */
  for (let index = 0; index < functionScopeVariable; index++) {
    console.log(index);
  }
}

test();
```

- `console.log(functionScopeVariable); //will throw error - ReferenceError: functionScopeVariable is not defined. Reason we are trying to use this outside of function scope`
