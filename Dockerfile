# ===== Stage 1: build Vite app =====
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# production build (Vite + server ts)
RUN npm run build


# ===== Stage 2: production runtime =====
FROM node:20-alpine

WORKDIR /app

# install only production deps
COPY package*.json ./
RUN npm install --omit=dev

# copy build output
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src ./src

# IMPORTANT: env will be injected by docker-compose
EXPOSE 5000

CMD ["node", "dist/server.cjs"]
