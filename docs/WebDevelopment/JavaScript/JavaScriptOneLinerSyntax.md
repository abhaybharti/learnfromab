---
sidebar_position: 1
---

# JavaScriptOneLinerSyntax

#### If you want to get the text that a user selects or highlights on a web page, there is a useful one-liner for that

```
const getSelectedText = () => window.getSelection().toString();
console.log(getSelectedText);
```

#### There is a method called scrollTo(x,y), it allows you to scroll to a particular set of used coordinates

```
const scrollToTop = () => window.scrollTo(0,0);

```

#### If you want to have a smooth scrolling animation

```
const Top = () => window.scrollTo({top:0, behavior:'smooth'});

```

#### If you want to redirect the user to a specified location, you can do something like this

```
const urlRedirect = url => location.href = url;
urlRedirect('https://google.co.in');

```
