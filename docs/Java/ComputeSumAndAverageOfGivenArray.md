---
sidebar_position: 1
---

# Compute Sum And Average Of Given Array

```
    public static void main(String[] args) {

        int[] numbers = {2, -9, 0, 5, 12, -25, 22, 9, 8, 12};
        int sum = 0;
        Double average;

        // A for-each loop. It is used to iterate over an array or a collection.
        for (int number : numbers) {
            sum += number;
        }

        // Getting the length of the array.
        int arrayLength = numbers.length;

        // Change sum and arrayLength to double as average is in double
        average = ((double) sum / (double) arrayLength);

        System.out.println("Sum = " + sum);
        System.out.println("Average = " + average);
    }
```
