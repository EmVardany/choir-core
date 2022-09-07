FROM --platform=linux/amd64 node:18

WORKDIR /srv

USER root

COPY app /srv/app
COPY package*.json /srv/
COPY server.js /srv/

RUN npm install
