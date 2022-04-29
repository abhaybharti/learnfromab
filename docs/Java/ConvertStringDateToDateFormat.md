---
sidebar_position: 1
---

# Convert Date in String format to Date Format

## Code to check if a String is null as well as "" value

- `Solution 1 : using import org.apache.commons.lang3.StringUtils`

This code checks a string for null as well "" value:

```
public static void main(String[] args) throws ParseException {
        String dateInString = "10-Feb-23";

        SimpleDateFormat DateFor = new SimpleDateFormat("MMM dd, yyyy"); //output format May 31, 2022
        String stringDate = DateFor.format(dateInString);

        System.out.println(convertDateStringFormat(dateInString, "dd-MM-yy", "MMM dd, yyyy"));
}

    public static String convertDateStringFormat(String date_str, String fromFormat, String toFormat) {
        String retVal = null;
        SimpleDateFormat fromUser = new SimpleDateFormat(fromFormat);
        SimpleDateFormat myFormat = new SimpleDateFormat(toFormat);
        try {
            retVal = myFormat.format(fromUser.parse(date_str));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return retVal;
    }
```
