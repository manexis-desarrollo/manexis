# ---------- BUILD STAGE ----------
FROM node:24 AS builder

WORKDIR /app

# activar corepack (maneja pnpm/yarn sin npm install)
RUN corepack enable

# opcional: fijar versión de pnpm
RUN corepack prepare pnpm@latest --activate

# copiar archivos
COPY . .

# instalar deps y build
RUN pnpm install --frozen-lockfile
RUN pnpm build

# ---------- PRODUCTION STAGE ----------
FROM nginx:alpine

# eliminar config default
RUN rm /etc/nginx/conf.d/default.conf

# copiar build
COPY --from=builder /app/dist /usr/share/nginx/html

# copiar config nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
