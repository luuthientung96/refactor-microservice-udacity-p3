FROM node:16-alpine AS ionic

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -f

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=ionic /usr/src/app/www /usr/share/nginx/html

EXPOSE 80
