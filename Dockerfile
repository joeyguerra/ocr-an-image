FROM node:16-alpine
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN npm i
ENTRYPOINT ["node", "index.mjs"]