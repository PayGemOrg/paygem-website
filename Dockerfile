# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.15.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

# At production stage


FROM nginx:stable-alpine AS production

COPY --from=build /src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /src/app/dist /usr/share/nginx/html

# Expose the port that the application listens on.
EXPOSE 3001

# Run the application.
CMD ["nginx", "-g", "daemon off;"]
