# Dockerfile
# Gunakan image Node.js resmi
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json terlebih dahulu
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh project
COPY . .

# Build Next.js app
RUN npm run build

# Expose port yang digunakan Next.js
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
