---
sidebar_position: 1
---

# Array

### Array -> Remove Duplicate Values

```
const letters = ['a','b','c','d','d','e','f','f']
```

#### remove duplicate Using Set

```
const unique = [... new Set(letter)]
console.log(unique)

```

`Output`
[ 'a', 'b', 'c', 'd', 'e', 'f' ]

#### remove duplicate Using Array reduce() method

```
const unique = letters.reduce((result,letter)=>{
  return result.includes(letters)? result:[...result, letters];
},[])
console.log(unique)
```

`Output`
[ 'a', 'b', 'c', 'd', 'e', 'f' ]

#### remove duplicate Using Array filter() method

```
const unique = letters.filter((letter,index)=>{
  return letters.indexOf(letter)===index;
})
console.log(unique)
```

`Output`
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
