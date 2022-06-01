---
sidebar_position: 1
---

# Find Second Largest Number In An Array

## Restriction

- Can't use sort() method

- `TO Write`

```
public static void main(String[] args) {
    int[] numberArray = {5, 6, 7, 0, 2, 3, 90};
    int large = numberArray[0];
    int secondLargest = numberArray[0];

    for (int iLoop = 0; iLoop < numberArray.length; iLoop++) {
      // Checking if the current element is greater than the largest element. If it is, then it is assigning the
      // largest element to the secondLargest element and the current element to the largest element.
      if (numberArray[iLoop] > large) {
        secondLargest = large;
        large = numberArray[iLoop];
      // This is checking if the current element is greater than the secondLargest element. If it is,
      // then it is assigning the current element to the secondLargest element.
      } else if (numberArray[iLoop] > secondLargest) {
        secondLargest = numberArray[iLoop];
      }
    }
    System.out.println(secondLargest);
  }
```
