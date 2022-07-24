---
sidebar_position: 1
---

# Loops in JavaScript

## Different types of Loops supported in JavaScript

`Here is sample array of objects`

```
const carShowRoom = [
  {id:1,name:'Maruti', model:"Swift"},
  {id:2,name:'Tata', model:"Nexon"},
  {id:3,name:'Mahindra', model:"Bolero"},
  {id:4,name:'Benz', model:"car"}
];
```

### Using For Loop

```
for (let index=0; index<carShowRoom.length;index++){
console.log(carShowRoom[index].name)
}
```

#### Output:

```
Maruti
Tata
Mahindra
Benz
```

### Using ForEach

```
carShowRoom.forEach(function(car, index, carShowRoom){
console.log(`Name: ${car.name} Model : ${car.model}`)
})
```

#### Output:

```
Name: Maruti Model : Swift
Name: Tata Model : Nexon
Name: Mahindra Model : Bolero
Name: Benz Model : car

```

### Using ForOff

```
for (let vehicle of carShowRoom){
  console.log(`Name: ${vehicle.name} Model : ${vehicle.model}`)
}
```

#### Output:

```
Name: Maruti Model : Swift
Name: Tata Model : Nexon
Name: Mahindra Model : Bolero
Name: Benz Model : car
```

### Using while loop

```
let index =0;
while(index<carShowRoom.length){
  console.log(carShowRoom[index].name)
  index++;
}
```

#### Output:

```
Maruti
Tata
Mahindra
Benz
```

### Using Do while loop

```
let index =0;
do {
  console.log(carShowRoom[index].name)
  index++;
}while(index<carShowRoom.length)
```

#### Output:

```
Maruti
Tata
Mahindra
Benz
```

### Using Map

```
let car = carShowRoom.map(carShowRoom => carShowRoom.name);
console.log(car)
```

#### Output:

```
[ 'Maruti', 'Tata', 'Mahindra', 'Benz' ]
```
