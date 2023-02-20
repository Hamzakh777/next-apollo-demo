![App demo](./assets/demo.png)
## Prerequisite
You need to have node installed on your machine and/or Docker.
## Running the project without Docker
You'll need two terminals
1. `cd ./client && pnpm dev`
2. `cd ./server && pnpm serve`

## Running the project with Docker
From the root folder run 
`docker-compose up`

## Generate Type definitions from Graphql schema
I added a centralized **Core** package that generates Type definitions from 
Graphql schema definition.

## Faker is not maintained anymore
As a result, I switched to [casual]()

## Cypress
On this particular project I used cypress to do both Component testing as well as for E2E
**Make sure the server is up and running before running the e2e tests**
`cd ./client && pnpm cypress`
The beauty about Cypress component testing is that we can use the same tool to do multiple jobs
that require Cypress + Jest + Storybook. I actually did write an article going more in-depth
about this topic, you can find it [here](https://www.hamzak.xyz/blog-posts/cypress-component-testing-vs-jest)