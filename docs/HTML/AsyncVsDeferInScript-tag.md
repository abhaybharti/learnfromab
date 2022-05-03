---
sidebar_position: 1
---

### async vs defer in `<script>` tag

This notes shows different ways to load JavaScript file in HTML, their pros & cons.

####

- **`<script> tag in the <head>` without async or defer**

Blocks HTML parsing. User would see a blank page while it fetches the .js file

```
    <html lang="en">
    <head>
        <script src="./index.js"> </script>
    </head>
    <body>

    </body>
    </html>

```

- **`<script> tag at the end of <body>` without async or defer**

Waits for HTML DOM to be created. User might have to wait longer

```
    <html lang="en">
    <head>

    </head>
    <body>
        <script src="./index.js"> </script>
    </body>
    </html>

```

- **`<script> tag in the <head>` using async**

Loads it as it is parsing the HTML and executes it as soon as the script is fetched. Good for 3rd party libraries

```
    <html lang="en">
    <head>
        <script async src="./index.js"> </script>
    </head>
    <body>

    </body>
    </html>

```

:::danger Caveat using async
**Scripts are not executed in order**

```
     <head>
        <!-- takes 20 seconds to load  -->
        <script async src="./index.js"> </script>
        <!-- takes 5 seconds to load  -->
        <script async src="./index.js"> </script>
    </head>

```

- **`<script> tag in the <head>` using defer**

Waits for DOM to be created. Executes script tags in the order you have defined them

```
    <html lang="en">
    <head>
        <script defer src="./index.js"> </script>
    </head>
    <body>

    </body>
    </html>

```

multiple scripts using defer, scripts are executed in order that you define them

```
     <head>
        <!-- takes 20 seconds to load  -->
        <script async src="./index.js"> </script>
        <!-- takes 5 seconds to load  -->
        <script async src="./index.js"> </script>
    </head>

```
