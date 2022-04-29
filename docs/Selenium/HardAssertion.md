---
sidebar_position: 1
---

# What is Hard Assertion

### What is JSON

JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data.

- Simple to build and debug
- Low light-weight payload size
- Acceptable across all modern high level programming languages

### Use Case

You want to send data to another machine? The challenge is how will the recipient machine understand it? A simple solution, convert your data into JSON. Receiving machine can simply parse it to understand.

### Key Points When Encoding Data to JSON

- key/value pairs
- Each pair is separated by commas
- Curly braces encapsulate objects
- Square brackets encapsulates arrays
- Arrays are called JSON Arrays
- JSON array hold JSON objects
- A JSON object can contain another JSON object and This is called Nested JSON Objects

### Example Of JSON Objects

```
{
  "name":"Shanvi",
  "age": 6
}
```

### Example Of JSON Array

```
[
  {
  "name":"Shanvi",
  "age": 6
  },
  {
  "name":"Kanha",
  "age": 8
},
]
```

### Open Questions

- JSON object contains another JSON object
- How to traverse JSON Objects/Arrays & read values
