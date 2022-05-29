---
sidebar_position: 1
---

# HashMapDetails

#### `1.` How to initialize a map with key as String and value as Integer

```
HashMap<String, Integer> map = new HashMap<>();
```

#### `2.` How to add and remove elements from HashMap

Add elements:

```
map.put("roll",1);

```

Remove elements:

```
map.remove("roll");
```

#### `3.` How to iterate through HashMap

        for (Map.Entry<String,Integer> e: map.entrySet()){
            System.out.println("Key : "+e.getKey()+ " Value : "+e.getValue());
        }

`Output : `
Key : roll Value : 1

#### `4.` Code to print HashMap key/value in console

```
import java.util.*;
public static void main(String[] args) {
         Map<Integer, String> map1 = new HashMap<Integer, String>();
               map1.put(1, "david");
                map1.put(2, "simon");
                map1.put(3, "mary");
                map1.put(4, "john");
                map1.put(5, "jane");

        System.out.println(map1);
    }
```

`Output : ` {1=david, 2=simon, 3=mary, 4=john, 5=jane}

#### `5.` Code to compare HashMap where key/values should be same and sequence should also be same

```
import java.util.*;

public class Map_Demo {
    public static void main(String[] args)
    {
        // Creating an empty Map
        Map<Integer, String> map1 = new HashMap<Integer, String>();
        Map<Integer, String> map2 = new HashMap<Integer, String>();

        // Mapping string values to int keys
        map1.put(1, "A");
        map1.put(2, "4");
        map1.put(3, "B");
        map1.put(4, "Welcomes");
        map1.put(5, "You");

        // Mapping string values to int keys
        map2.put(1, "A");
        map2.put(2, "4");
        map2.put(3, "B");
        map2.put(4, "Welcomes");
        map2.put(5, "You");

        // Displaying the Map1
        System.out.println("First Map: " + map1);

        // Displaying the Map2
        System.out.println("Second Map: " + map2);

        // Checking the equality
        System.out.println("Equality: " + map1.equals(map2));
    }
}
```

`Output : `
First Map: {1=A, 2=4, 3=B, 4=Welcomes, 5=You}
Second Map: {1=A, 2=4, 3=B, 4=Welcomes, 5=You}
Equality: true

#### `6.` Does Hashmap allow duplicate keys and values

HashMap does not allow duplicate key but allows duplicate values

#### `7.` Does Hashmap allow null key and values

HashMap allows null key but only once, multiple null values supported

#### `8.` Do HashMap is thread safe

HashMap is not thread safe as it is not synchronized

#### `9.` Does HashMap maintains insertion order

HashMap does not maintain insertion order, but TreeMap/LinkedHashMap maintains insertion order

#### `10.` Get all keys in HashMap

HashMap does not maintain insertion order, but TreeMap/LinkedHashMap maintains insertion order

#### `11.` How to sort HashMap with keys

TBD

#### `12.` How to sort HashMap with values

TBD
