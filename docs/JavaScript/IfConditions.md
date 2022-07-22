---
sidebar_position: 1
---

# If

### Multiple ways to write if conditions

`Classical approach`

```
const status = 'online'

if (status ==='online' || status === 'away' || status ==='busy'){
 console.log('Do Something')
}
```

`A better approach`

```
if (['online','away', 'busy'].indexOf(status)!== -1){
 console.log('Do Something')
}
```

`Check IndexOf with `~` operator`

```

if (~['online','away', 'busy'].indexOf(status)){
 console.log('Do Something')
}
```

`Even better, using includes method`

```
if (['online','away', 'busy'].includes(status)){
 console.log('Do Something')
}
```
