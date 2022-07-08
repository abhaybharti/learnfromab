---
sidebar_position: 1
---

# TestNG Annotations

## Annotations

An annotation is a tag that provides additional information about test methods, class and packages. It is denoted by the '@' prefix. TestNG uses following annotations

### @𝑻𝒆𝒔𝒕

All functionalities to be automated are kept inside the @Test annotation method.

### @𝑩𝒆𝒇𝒐𝒓𝒆𝑻𝒆𝒔𝒕

This annotation is run before your first @Test annotation method in your class.

### @𝑨𝒇𝒕𝒆𝒓𝑻𝒆𝒔𝒕

This annotation runs after all your test methods belonging to your class have run.

### @𝑩𝒆𝒇𝒐𝒓𝒆𝑴𝒆𝒕𝒉𝒐𝒅

This annotation runs before every @test annotated method.

### @𝑨𝒇𝒕𝒆𝒓𝑴𝒆𝒕𝒉𝒐𝒅

This annotation runs after every @test annotated method.

### @𝑩𝒆𝒇𝒐𝒓𝒆𝑪𝒍𝒂𝒔𝒔

This annotation runs before the first test method in the current class.

### @𝑨𝒇𝒕𝒆𝒓𝑪𝒍𝒂𝒔𝒔

This annotation runs after the last test method in the current class.

### @𝑩𝒆𝒇𝒐𝒓𝒆𝑺𝒖𝒊𝒕𝒆

A suite can consist of multiple classes; this annotation runs before all the classes' test methods. This annotation marks the entry point of execution.

### @𝑨𝒇𝒕𝒆𝒓𝑺𝒖𝒊𝒕𝒆

This annotation runs post all the test methods of all the classes have run.

### @𝑩𝒆𝒇𝒐𝒓𝒆𝑮𝒓𝒐𝒖𝒑𝒔

This annotation helps run the defined test before the specified group.

### @𝑨𝒇𝒕𝒆𝒓𝑮𝒓𝒐𝒖𝒑𝒔

This annotation runs after all the test methods of the specified group are executed.
