---
sidebar_position: 1
---

# Spreading data

## Spreading into a function call turns Array elements into function call arguments

```
function returnArgArray(...args){
  return args
}

returnArgArray(...[1,2,3])

console.log(returnArgArray(...[1,2,3]))
`Output:`
[ 1, 2, 3 ]

//spread arrays into Array literals
console.log(returnArgArray(...[1,2,3],4))
`Output:`
[ 1, 2, 3, 4 ]
```
