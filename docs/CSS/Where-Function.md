---
sidebar_position: 1
---

### Make your CSS code more readable and less repetitive using the :where() function of css

When we have to apply the same styles to multiple elements the CSS code become repetitive. This repetition can be avoided using the : where() function.

The :where() function takes in a list of selectors as an argument and applies the styles to all the selectors in one go. Thus reduce the code and makes it more readable.

`Repetitive code`

```
header a:hover,
main a:hover,
footer a:hover{
    color: red;
    text-decoration: underline;
}
```

`Less Code using Where Function`

```
:where(header,main,footer) a: hover{
    color: red;
    text-decoration: underline;
}
```
