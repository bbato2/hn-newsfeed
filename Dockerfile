# Do the npm install or yarn install in the full image
FROM node:12-alpine AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json  .
COPY yarn.lock .
RUN yarn install

COPY . /usr/src/app
RUN yarn build

# And then copy over node_modules, etc from that stage to the smaller base image
FROM nginx:mainline-alpine
WORKDIR /usr/src/app
RUN apk --no-cache add curl
COPY ./nginx.config /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
