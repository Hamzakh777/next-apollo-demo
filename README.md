## Running the project
You'll need two terminals
1. `cd ./client && pnpm dev`
2. `cd ./server && pnpm serve`

## Generate Type definitions from Graphql schema
I added a centralized **Core** package that generates Type definitions from 
Graphql schema definition.

## Faker is not maintained anymore
As a result, I switched to (casual)[]

## Cypress
On this particular project I used cypress to do both Component testing as well as for E2E
**Make sure the server is up and running before running the e2e tests**
`cd ./client && pnpm cypress`