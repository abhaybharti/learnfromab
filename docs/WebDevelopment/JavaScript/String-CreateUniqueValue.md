---
sidebar_position: 5
---

### Create a Unique ID

```
const uid = () =>{
  //Get current time and convert to String, String(36) converts large number to base 36
  const head = Date.now().toString(36);


  //Generate random number and covert to string of base 36
  const tail = Math.random().toString(36).substr(2);

  //concatenate both string value
  return head+tail;
}

//call uid function
uid()
```

`Sample Output :`
`l2o6trgk3prw6bdui96`

:::tip Tip

You can add write uid function in util.js file like
export const uid = () =>{ } and add import statement `import {uid} from ../utils;` and call uid() function
