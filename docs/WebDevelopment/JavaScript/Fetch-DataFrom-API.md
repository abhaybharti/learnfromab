---
sidebar_position: 1
---

# Fetch Data from API

## Different ways to fetch data from API

- using **fetch** API
  This method accept URI to the data. To do this, first create a function fetchData(), it will call fetch() method with provided URL, then convert the result to JSON Object.

  ```
  const fetchData = () =>{
  return fetch("https://api.agify.io/?name=bella")
   .then((response)=>response.json())
   .then((response)=>console.log(response))
   .catch(err => console.error(err));
  }

  fetchData() //call function
  ```

  `Output: `
  {name: 'bella', age: 35, count: 40138}

  `Failure response : Failed to fetch at \_app-c265dce31871f367.js:1:752592 at fetchData (<anonymous>:2:10) at <anonymous>:7:1 `

:::tip You can specify header info also

```
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

const fetchData = () =>{
  return fetch("https://api.agify.io/?name=bella", options)
   .then((response)=>response.json())
   .then((response)=>console.log(response))
   .catch(err => console.error(err));
  }
```

- using **Async - Await** Syntax
  Remove **.then()** callback and simply get back asynchronously resolved data.
- using **Axios** library
- using **Custom react hooks**
- using **Use React Query** library
- using **Using GraphQL** API
