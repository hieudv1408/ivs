# IVS HOME TEST
CANDIDATE  
Name: Hieu Dinh Van  
Email: hieudv1408@gmail.com

Requirements

1. Database
Database: MongoDB
Schema:


2. Backend
Technology: Node.js, Docker
Domain: https://ivs-backend.hieudinhvan.com

Before using these apis below, please generate a token first

```
curl --location --request POST 'https://ivs-backend.hieudinhvan.com/api/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "admin",
    "password": "123456"
}'
```
The result will be like
```
{
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjYxNTI5OTEwLCJleHAiOjE2NjE1MzM1MTB9.XfwWVeoOsY5TYEwfbSBJXqyL3VMzOrJR7UrMRnmOyew"
    }
}
```
Please store the token somewhere to use in the header

Endpoint 1: Get list of names for all sign-ups from database
API: GET /api/signups
```
curl --location --request GET 'https://ivs-backend.hieudinhvan.com/api/signups' \
--header 'Authorization: Bearer <api-token>'
```




Endpoint 2: Get name and email for a sign-up from database

Endpoint 3: Post name and email from sign-up form and store in
database



