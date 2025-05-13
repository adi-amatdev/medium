FROM node:20-bookworm

RUN apt-get update && apt-get install -y git curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install -g wrangler

COPY . .

EXPOSE 8787

CMD ["npx", "wrangler", "dev", "--local", "--port=8787", "--ip=0.0.0.0"]