---
sidebar_position: 1
---

# Rest API

### REST Stands for Representational State Transfer

It works on simple Request/Response system.
An API is an Application Programming Interface. It is a set of rules that allow programs to talk to each other. The Developer creates the API on the server and allows the client to talk to it. It is a set of programming code that enables data transmission between one software product and another. It also contains the terms of this data exchange.

| Request                                                                                                                 | Response                                                                          |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 1. Client can make a request using HTTP Methods. HTTP methods are GET, POST, PUT, DELETE, HEAD, TRACE, OPTIONS, CONNECT | Server returns a response with an HTTP Status code.Ex 200, 202, 403, 404, 500 etc |
| 2. HTTP Request contains -> Request method, HTTP Headers, Body                                                          | HTTP Response contains Status code, HTTP Headers, Response Body                   |

### Rest API Constraints

- Client-Server Architecture (No Third party interactions)
- Uniform Interface (Follow a Common Protocol)
- Cacheability (respone can be cacheable)
- Layering (Multiple Intermediaries between client and server)
- Statelessness (There is no state, client and server are separated)

### HTTP Headers

Client and Server can pass extra bit of information with the request and response using HTTP Headers. it is divided in four parts

- **`Request Headers :`** client to Server
- **`Response Headers :`** Server to client
- **`Representation Headers :`** Information about the body of the resource
- **`Payload Headers :`** Information about the payload data

### Widely used HTTP Headers

- **`Accept : `** Type of data client can understand
- **`Content-Type : `** Specifies the media type of the resources
- **`Accept-Encoding : `** Which encoding method client can understand
- **`Host : `** Specifies the domain name
- **`Authorization : `** Used to pass credentials so that server can authenticate
- **`Access-Control-Allow-Origin : `** Which origin is allowed to access the resource
- **`Accept-Language : `** Client is expecting the response in the mentioned language
- **`Access-Control-Allow-Methods : `** Which methods are allowed to access the cross-origin resources

### HTTP Status codes - Server always returns HTTP Status code with the response

#### Successful Responses

- **`200 OK : `** Everything is Fine
- **`201 Created : `** New resources was created

#### Redirection Messages

- **`301 Moved Permanently : `** Response has been moved permanently to the new URL

#### Client Error

- **`400 Bad Request : `** Invalid Syntax
- **`4011 Unauthorized : `** Credentials are incorrect
- **`4003 Forbidden : `** You don't have permission to access the resource
- **`404 Not Found : `** Invalid URL
- **`400 Too Many Requests : `** User has sent too many requests in a given amount of time

#### Server Error

- **`500 Internal Server Error : `** Server does not know How to handle the unexpected situation

### HTTP Request Methods

- **`GET : `** The Get method is the most common of all these request methods. it is used to fetch the desired resource from server.
- **`POST : `** The Post method is used to submit the server. As we are submitting data, the p ost method often changes the state of the server.
- **`PUT : `** The PUT method is used whenever you need to change the resource. The resource which is already a part of resource collection.
- **`PATCH : `** The Patch request method is used to modify only the necessary part of the data or response. It does not modify the entire response
- **`DELETE : `** Delete request is used to delete the specified resource. It request that origin server delete the resource identified by the request URL.

### How to test APIs

One need to understand what that respective API does, test validation of the input fields while making a request and verify that you are getting the expected data in the response. One can also check the data integrity between the APIs by creating contracts between APIs.

For Example - if user deletes something using the Delete API, you can test by fetching the same record using GET API and expect that no records are returned in the response.

### Types of API

- **Public API** - Available to any third party developers. APIs are publicly available to developers and user with minimal restriction. They may require registration, use of an API key or OAUTH or maybe completely open.

- **Partner API** - APIs exposed by/to strategic business partners. They are not available publicly and need specific entitlement to access them.

- **Private API** - APIs are hidden from external users and only exposed by internal systems. These are not meant for consumption outside of the company but rather for use across different internal development teams for reuse of services.

### Further Reading

- **Access Control HTTP Header**
- **Caching in API Calls**
