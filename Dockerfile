FROM node:20.12.2

WORKDIR /app

COPY package*.json pnpm-lock.yaml .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 8080

CMD ["pnpm", "preview"]
