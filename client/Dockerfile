FROM node:18

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

ENV PORT 3000

RUN mkdir -p /home/app/client && chown -R node:node /home/app/client
WORKDIR /home/app/client
COPY --chown=node:node . .

USER node

RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD [ "pnpm", "start" ]