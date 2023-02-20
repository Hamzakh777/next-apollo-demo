FROM node:18

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

ENV PORT 4000

RUN mkdir -p /home/app/server/ && chown -R node:node /home/app/server
WORKDIR /home/app/server
COPY --chown=node:node . .

USER node

RUN pnpm i

EXPOSE 4000

CMD ["pnpm", "start"]