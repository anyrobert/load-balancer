FROM node:alpine

RUN mkdir -p /home/node/app/node_modules && chown node:node /home/node/app/node_modules

ARG PORT=1234

ENV PORT=$PORT

RUN echo "BUILD TO PORT $PORT"

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE $PORT

CMD ["node", "app.js"]

