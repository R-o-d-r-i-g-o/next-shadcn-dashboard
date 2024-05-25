FROM node:20.10-alpine AS build

WORKDIR /app

RUN npm i -g pnpm \
    pnpm install  \
    pnpm build

COPY . .

FROM node:20.10-alpine AS publish

LABEL maintainer="rodrigo marques ribeiro <rodrigomarqribeiro@gmail.com>"
LABEL version="1.0"

WORKDIR /app

RUN npm i -g pnpm

COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/public/ ./public

EXPOSE 3000

CMD ["pnpm", "dev"]