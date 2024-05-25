FROM node:20.10-alpine AS builder

WORKDIR /app

COPY . .

RUN npm i -g pnpm \
    pnpm install  \
    pnpm build

FROM node:20.10-alpine AS publish

LABEL maintainer="rodrigo marques ribeiro <rodrigomarqribeiro@gmail.com>"
LABEL version="1.0"

WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/.next ./.next

# test mock

EXPOSE 3000

CMD ["pnpm", "dev"]