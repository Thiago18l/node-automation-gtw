ARG BASE_IMAGE=docker.io/library/node:20.11-alpine


FROM ${BASE_IMAGE} AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk add --no-cache tini && \
  corepack enable
WORKDIR /app

FROM base AS build

USER root
COPY . .
RUN pnpm install && \
    pnpm run build

FROM base as prod

ENV NODE_ENV production
ENV HOSTNAME "0.0.0.0"
USER node
WORKDIR /app

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist/ ./dist
COPY --chown=node:node prisma/ ./prisma/
COPY package.json  tsconfig.json ./

EXPOSE 3100 443 8080 80 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "./dist/main.js"]