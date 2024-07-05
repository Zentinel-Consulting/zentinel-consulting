# Stage 1: Node with pnpm
FROM node:lts-bullseye-slim AS base
WORKDIR /app
RUN npm install -g pnpm

# Stage 2: Build Stage, install prerequisites
FROM base AS build
COPY package.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 3: Production Stage
FROM base AS production
WORKDIR /app
COPY --from=build --chown=node:node /app/build ./build
COPY package.json ./
RUN pnpm install --prod
#  Runtime environment
ENV NODE_ENV=production
ENV MODELS_HOST=localhost
USER node
EXPOSE 3001
CMD ["node", "./build"]
