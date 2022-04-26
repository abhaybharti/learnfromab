---
sidebar_position: 1
---

# The HTML DOM

### What is DOM (Document Object Model)

The Dom is a tree structure representation created by the browser that enables the HTML structure to be easily accessed by programming languages - for example browser itself uses
it to apply styling an other information to the correct elements as it render a page, and developers like you can manipulate the DOm with JavaScript after the page has been rendered.

### Representation of DOM

-> window
->-> document
->->->Anchor
->->->Form
->->->Link

### Basic DOM Manipulation

To manipulate an element inside the DOM, you first need to select it and store a reference to it inside a variable

```
<button id="btn-Add">Add</button>
const button = document.querySelector('#btn-Add'); //returns button element having id = "btn-Add"


const link = document.querySelector('a'); //returns the first <a> tag element in the document
```

```
let btn-Add = document.getElementById('btn-Add');
```

```
let btn-Add = document.getElementByTagName('a');
```

```
let btn-Add = document.getElementByClassName('content');
```

### text Content

```
button.textContent = "XYZ";

//.textContent to change the text inside HTML element. can also use method .innerHTML and .innerText
```

to practice

### Creating New Elements

```
<section></section>
//select the section
const sect = document.querySelector('section');

//create new element
const para = document.createElement('p);

//add the new paragraph in the section
sect.appendChild(para);
```

<Highlight color="#25c2a0">to practice</Highlight>
