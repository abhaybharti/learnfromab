---
sidebar_position: 1
---

# String-CheckNullOrEmpty
## Code to check if a String is null as well as "" value



- `Solutionimport org.apache.commons.lang3.StringUtils`

This code checks a string for null as well "" value:

```
import org.apache.commons.lang3.StringUtils;
public static void main(String args[]){
        String str = "";
        if(StringUtils.isEmpty(str)){
            System.out.println("Null");
        }else{
            System.out.println("Not Null");
        }
    }
```
- `This solution works fine if String has "", will throw error if str = null. `

```
 public static void main(String[] args)
    {
        String str = "";
 
        System.out.println(str == null || str.isEmpty());    // true
    }
```
