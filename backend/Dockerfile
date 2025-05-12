FROM node:20-bookworm

# Install dependencies
RUN apt-get update && apt-get install -y git curl && rm -rf /var/lib/apt/lists/*

# Set work directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Install wrangler globally
RUN npm install -g wrangler

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 8787

# Start wrangler dev server at container runtime, NOT build time
CMD ["npx", "wrangler", "dev", "--local", "--port=8787", "--ip=0.0.0.0"]