FROM node:20.10-alpine AS builder-n-publish

WORKDIR /app

COPY . .

RUN npm i -g pnpm \
    pnpm install  \
    pnpm build

EXPOSE 3000

CMD ["pnpm", "dev"]