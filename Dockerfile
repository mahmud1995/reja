FROM node:16-alpine

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js