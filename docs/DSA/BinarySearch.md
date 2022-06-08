---
sidebar_position: 1
---

# BinarySearch

Binary search only works when your list is in sorted order. If the elements are not sorted already, you need to sort them first. Binary search runs in logarithmic time (or log time) - O(log n). In this approach, the element is always searched in the middle of a portion of an array.

- 100 items, binary search takes 7 guesses
- 4 billion items, it takes 32 guesses

### Binary Search Working

Binary search algorithm can be implemented in two ways

- Iterative method
- Recursive method (follows the divide and conquer approach)

#### Steps

1.  Lets see how binary search works for number between 1 and 100. You have to try to guess number in the fewest tries possible. Let **item=40**

2.  Set two pointers low and high at the lowest and highest position respectively, **low = 0, high=100**

3.  find the middle element **mid** of the array i.e. **arr[(low+high)/2] = 50**
4.  if **item == mid**, then return **mid**. Else compare the element to be search with m
5.  if **item > mid**, compare item with the middle element of the elements on the **right side of mid**. This is done by setting **low** to **low=mid+1**
6.  Else compare item with middle element of the elements on the left side of **mid**. This is done by setting **high** to **high=mid-1**
7.  Repeat step 3 to 6 until low meets high
8.  **item = 40** is found

```
  public static int binarySearch(int [] integerArray,int item) {
    // low and high keep track of which part of the list you will search in
    int low = 0;
    int high = integerArray.length - 1;

    while (low <= high) { //while you have not narrowed it down to one element
      int mid = (low + high); //check the middle element
      int guess = integerArray[mid];
      if (guess == item) { //Found the item
        return mid;
      }
      if (guess > item) { //the guess was too high
        high = mid - 1;
      } else { //the guess was too low
        low = mid + 1;
      }
    }
    return -1; //The item does not exist
  }

  public static void main(String[] args) {
    int[] integerArray = {1, 2, 3, 5, 7, 8, 9, 10};
    System.out.println(integerArray[binarySearch(integerArray,5)]);
    }
```

`Output`
5 & 3rd element from array

### Time Complexity

- Best case complexity `O(1)`, best case search occurs when the element you are searching for is the middle element of list/array because in that case you will get the desired result in a single go.
- Average Case complexity `O(log n)`
- Worst case complexity `O(log n)`, when element searched is at the extreme end

### Space Complexity

- The space complexity of the binary search is `O(1)`

  `Exercise`

- Suppose you have a sorted list of 128 names and you are searching it using binary search. What's the maximum number of step it would take
- Suppose you doubled the size of the list. What's the maximum number of steps now?
