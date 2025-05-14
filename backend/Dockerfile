FROM node:20-bookworm

# System dependencies
RUN apt-get update && apt-get install -y git curl \
  && rm -rf /var/lib/apt/lists/*

# Set working dir
WORKDIR /app

# Install global dependencies (cached)
RUN npm install -g wrangler

# Copy package files and install only dependencies (cached separately)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy only Prisma files and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Finally, copy the rest of the app (source code changes most often)
COPY . .

# Expose dev port
EXPOSE 8787

# Run dev server
CMD ["npx", "wrangler", "dev", "--local", "--port=8787", "--ip=0.0.0.0"]
