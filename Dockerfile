FROM node:18

WORKDIR /index.js

COPY package.json ./
COPY index.js ./

RUN npm install

EXPOSE 3000


CMD ["npm", "start"]