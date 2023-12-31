FROM node:19.9.0-alpine AS build
WORKDIR /root
COPY . .
RUN npm i pnpm -g && pnpm i && pnpm build:docs

FROM node:19.9.0-alpine
WORKDIR /root
COPY --from=build /root/apps/docs/.output /root
EXPOSE 3000

CMD ["node", "/root/server/index.mjs"]
