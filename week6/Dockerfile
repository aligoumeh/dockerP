FROM node:12-alpine

WORKDIR /app

COPY backend /app

ENV PORT 8080

RUN npm install

EXPOSE 8080

CMD ["node", "./index.js"]