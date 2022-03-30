# teste-contele

Hello! I created this repository for a coding test from Contele.

This repository contains a RESTFUL API built utilizing node.js, Knex, Postgre, Express, and Swagger.

## Endpoints:

| HTTP | Route | Body | Description |
|--- |--- |--- |--- |
| GET | /users | - | Show all saved users |
| POST| /users | JSON (email,senha) | Add one new user |
| PUT | /users/id | JSON (email,senha) | Update one existing user's email and/or password, selected by his ID |
| DELETE | /users/id | - | Delete one user, selected by his ID |
| DELETE | /users | - | Delete all saved users |

## Postgres and Express setup:

````
database name: teste_contele
user: postgres
password: 0000
table name: users
port: 3333
````
## Swagger location
`/api-docs`

## Tools used:
- vscode
- Insomnia (API client)
- Docker (set up Postgre instance on dev machine)
- Linux (Manjaro)
- Git

## Technologies used:
- node.js
- Knex (first contact with)
- Swagger (first contact with)
