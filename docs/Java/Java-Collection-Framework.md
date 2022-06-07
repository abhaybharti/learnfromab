---
sidebar_position: 1
---

#Java-Collection-Framework

The Java Collection framework is a collection of interfaces and classes which helps in storing and processing the data efficiently.

![Collections Framework hierarchy](/img/Java-collection-framework-hierarchy.png)

# List

A List is an ordered collection (sometime called a sequence). Lists may contain duplicate elements. Elements can be inserted or accessed by their position in the list using a zero based index

## ArrayList

ArrayList class implements List interface and it is based on an Array data structure. It is a resizable-array implementation of the **List** interface. It implements all optional list operations and permits all elements including **null**.

![Collections Framework hierarchy](/img/Java_ArrayList_tutorial.png)

### Why ArrayList is better than Array

The limitation with Array is that it has fixed length so if it is full you can not add any more elements to it, if there are number of elements gets removed from it the memory consumption would be the same as it does not shrink.

ArrayList can dynamically grown and shrink after addition and removal of elements. It enables us to use predefined methods for different operations.

### Create ArrayList

```
    ArrayList<String> arrayList = new ArrayList<>();  This statement creates an ArrayList with the name arrayList with type 'String'. The type determines which type of elements the list will have.
    ArrayList<Integer> integerArrayList = new ArrayList<>() This statement creates an ArrayList with the name integerArrayList that accepts int elements.
```

### Add Element to an ArrayList

We add elements to an ArrayList by using **add()** method. This method has couple of variations, which we can use based on the requirement.

```
 arrayList.add("Pari"); Add element at the end of list
    System.out.println(arrayList);

    arrayList.add(0,"Govind"); To add element at the specified location in ArrayList, we can specify the index
    System.out.println(arrayList);
```

Index starts at 0

### Change Element

Use the **set method** to change an element in the ArrayList. This method takes index and new element, this method updates element present at the given index with the new element.
arrayList.set(0,"Gopal");

**set()** method can only be used on index of existing range. for example if you try set(5,"Hari"), will throw index out of bound error.

### Remove Element

**remove()** method to remove elements from an arrayList. It has two variations

```
arrayList.remove("Gopal"); remove first occurrence of element having value "Gopal"

arrayList.remove(2); remove element at index 2

```

### Loop ArrayList

The correct way of displaying the elements is by using an **for loop** like this

```
for (String str:arrayList){
      System.out.println(str);
}
```

`Output: `
Pari
Shirsti
Aayu
Madhusudan

### Sort ArrayList

**sort()** method in the Collections class, this class is a part of java.util package. It can be used to sort an ArrayList. It can sorted as list of String type alphabetically or numeric list as well as.

```
import java.util.Collections;
    Collections.sort(arrayList);
    for (String str:arrayList){
      System.out.println(str);
    }
```

```
    // Sorting the arrayList in reverse order or decreasing order
    Collections.sort(arrayList, Collections.reverseOrder());
    for (String str:arrayList){
      System.out.println(str);
    }
```

### Compare two ArrayList

We have two ArrayList **arrayListFirst** and **arrayListSecond**. We will compare these ArrayLists using **contains()** method and store the comparison result in third ArrayList.

```
 ArrayList<String> arrayListFirst = new ArrayList<>();
    ArrayList<String> arrayListSecond = new ArrayList<>();

    arrayListFirst.add("Hi");
    arrayListFirst.add("How are you");
    arrayListFirst.add("Good Morning");
    arrayListFirst.add("Bye");
    arrayListFirst.add("Good Night");
    arrayListFirst.add("Yes");

    arrayListSecond.add("Howdy");
    arrayListSecond.add("Good Evening");
    arrayListSecond.add("Bye");
    arrayListSecond.add("Good Night");

    ArrayList<String> arrayListThird = new ArrayList<>();
    for (String temp: arrayListFirst)
      arrayListThird.add(arrayListSecond.contains(temp)? "Yes":"No");
    System.out.println(arrayListThird);
```

### How to Swap two elements in ArrayList

https://beginnersbook.com/2013/12/how-to-swap-two-elements-in-an-arraylist/

### How to convert an array to ArrayList

https://beginnersbook.com/2013/12/how-to-convert-array-to-arraylist-in-java/

### How to convert ArrayList to string array

https://beginnersbook.com/2013/12/how-to-convert-arraylist-to-string-array-in-java/

### Convert HashSet to a List/ArrayList

https://beginnersbook.com/2014/08/convert-hashset-to-a-list-arraylist/

### Convert a LinkedList to ArrayList

https://beginnersbook.com/2014/07/java-convert-a-linkedlist-to-arraylist/

### How to join/combine two ArrayLists

https://beginnersbook.com/2013/12/how-to-joincombine-two-arraylists-in-java/

### How to clone an ArrayList to another ArrayList

https://beginnersbook.com/2013/12/how-to-clone-an-arraylist-to-another-arraylist/

### How to empty an ArrayList

https://beginnersbook.com/2013/12/how-to-empty-an-arraylist-in-java/

### ArrayList trimToSize()

https://beginnersbook.com/2013/12/java-arraylist-trimtosize-method-example/

## LinkedList

## Vector

# Set

A Set is an interface collection that can not contains duplicate elements.

## HashSet

## LinkedHashSet

## TreeSet

# Map

A Map is an object that maps keys to values. A map cannot contain duplicate keys.

## HashMap

## TreeMap

## LinkedHashMap

## HashTable

# Iterator/ListIterator

Iterator and ListIterator are used to iterate through elements of a collection class. Iterator can traverse in one direction (forward) while ListIterator can traverse the collection class on both direction.

## Iterator and Comparator

## Comparable and Comparator

## Java Collection Questions

https://beginnersbook.com/java-collections-tutorials/
