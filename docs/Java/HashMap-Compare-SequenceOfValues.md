---
sidebar_position: 1
---

# HashMap-Compare-SequenceOfValues

## Code to compare HashMap where key/values should be same and sequence should also be same

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
