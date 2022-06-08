---
sidebar_position: 1
---

# Convert String To Boolean

### Using Boolean.parseBoolean()

This method returns an equivalent boolean value of given String, for example, if you pass "true" it will return the primitive boolean value true. Similarly, if you pass "false" it will return false. It is case insensitive, which means if you pass "true", "TRUE", or "True" you will still get a true boolean value. It doesn't throw an exception if you pass any String value other than true and false. For example, if you pass "YES" it will return false, which is not obvious but that's still better than throwing an exception like NumberFormatException.

parseBoolean returns a boolean primitive value

```String value = "true";
        boolean b = Boolean.parseBoolean(value);
        System.out.println(b);
        value = "True";
        b = Boolean.parseBoolean(value);
        System.out.println(b);

        value = "false";
        b = Boolean.parseBoolean(value);
        System.out.println(b);
```

### Boolean.valueOf()

The Boolean.valueOf() method work similar, it returns a true boolean value for a non-null String equal to true, ignoring case and returns false for everything else. It also returns a Boolean object instead of a primitive boolean value.

```
     // valueOf returns a Boolean object
     String data = "false";
     boolean f = Boolean.valueOf(data);
     System.out.println(f);

     data = "true";
     f = Boolean.valueOf(data);
     System.out.println(f);

     data = "TRUE";
     f = Boolean.valueOf(data);
     System.out.println(f);
```

### Boolean.getBoolean()

It accepts a String and returns a boolean.

```
        System.setProperty("CODING_IS_FUN", "true");
        Assert.assertTrue(Boolean.getBoolean("CODING_IS_FUN"));
```

### Conclusion Notes

- You should always use valueOf() method because Boolean instances are immutable and just two instances are enough to cover all scenarios.
- The parseBoolean() method returns a primitive boolean value while the valueOf() returns a Boolean object
- Though in the age of auto-boxing, a Boolean can easily be stored in a boolean variable, this is an important difference which you should remember.
- Another benefit of using the valueOf() method is that it caches the boolean value and returns the already created Boolean.TRUE and Boolean.FALSE value
- instead of creating a new instance every time.
- If you don't need a new instance of the Boolean object then you should always use Boolean.valueOf() method to create Boolean objects to get better performance.
