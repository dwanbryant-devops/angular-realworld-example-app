# syntax=docker/dockerfile:1

# ---- build ----
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
# --ignore-scripts: skips the husky git-hook install (no .git in the build context)
RUN bun install --frozen-lockfile --ignore-scripts
COPY . .
RUN bun run build

# ---- runtime ----
# Unprivileged nginx: listens on 8080, runs as uid 101, writes only to /tmp.
FROM nginxinc/nginx-unprivileged:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/angular-conduit/browser /usr/share/nginx/html
USER 101
EXPOSE 8080
