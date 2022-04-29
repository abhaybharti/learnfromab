---
sidebar_position: 1
---

# what is encapsulation and why it is used

## what is encapsulation

- `TO Write`

### why it is needed

The basic use of encapsulation is to hide the components of a class and their implementation. People who will use them doesn't need to know how they are working inside. It provides better security and also abstraction. With this isolation we can do a lot more with the data.

When we try to operate on public variables, one can set any values to them. For example, firstName can be set with null, a string with special characters or numbers.

Instead, if we have declared as private variables, then in the setter method we can do initial business checks before setting the values to the variables.

The same gets applied for getter methods. You have the control to return a default value if some variable is null or not in the desired state.

Basics: Methods bring better control than variables.
