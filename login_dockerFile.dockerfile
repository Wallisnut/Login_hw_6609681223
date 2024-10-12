FROM node:18

WORKDIR /usc/src/app/

COPY ./package*.json ./

RUN npm install

COPY ./..

EXPOSE 8000

CMD ["node","index.js"]
