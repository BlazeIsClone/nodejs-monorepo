FROM node:17.8.0-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 5000

CMD [ "npm", "run", "start" ]