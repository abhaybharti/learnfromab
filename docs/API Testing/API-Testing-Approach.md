---
sidebar_position: 1
---

API Testing Approach is a predefined strategy or a method that the QA team will perform in order to conduct the API testing after the build is ready. This testing does not include the source code. The API testing approach helps to better understand the functionalities, testing techniques, input parameters and the execution of test cases.
Following points helps the user to do API Testing approach:

Understanding the functionality of the API program and clearly define the scope of the program

❇️Apply testing techniques such as equivalence classes, boundary value analysis, and error guessing and write test cases for the API

❇️Input Parameters for the API need to be planned and defined appropriately

❇️Execute the test cases and compare expected and actual results.

🎆🎆🎆 How to Test API 🎆🎆🎆

API automation testing should cover at least following testing methods apart from usual SDLC process

🎈 Discovery testing: The test group should manually execute the set of calls documented in the API like verifying that a specific resource exposed by the API can be listed, created and deleted as appropriate

🎈 Usability testing: This testing verifies whether the API is functional and user-friendly. And does API integrates well with another platform as well

🎈 Security testing: This testing includes what type of authentication is required and whether sensitive data is encrypted over HTTP or both

🎈 Automated testing: API testing should culminate in the creation of a set of scripts or a tool that can be used to execute the API regularly

🎈 Documentation: The test team has to make sure that the documentation is adequate and provides enough information to interact with the API. Documentation should be a part of the final deliverable

Best Practices of API Testing:

API Test cases should be grouped by test category
On top of each test, you should include the declarations of the APIs being called.

Parameters selection should be explicitly mentioned in the test case itself Prioritize API function calls so that it will be easy for testers to test Each test case should be as self-contained and independent from dependencies as possible Avoid “test chaining” in your development Special care must be taken while handling one-time call functions like – Delete, CloseWindow, etc…
Call sequencing should be performed and well planned
To ensure complete test coverage, create API test cases for all possible input combinations of the API.
Types of Bugs that API testing detects
Fails to handle error conditions gracefully
Unused flags
Missing or duplicate functionality
Reliability Issues. Difficulty in connecting and getting a response from API.
Security Issues
Multi-threading issues
Performance Issues. API response time is very high.
Improper errors/warning to a caller
Incorrect handling of valid argument values
Response Data is not structured correctly (JSON or XML)
