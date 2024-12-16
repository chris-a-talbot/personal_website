# Stage 1: Build the React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY frontend/ ./

# Build the app
RUN npm run build

# Stage 2: Serve the app using a static server
FROM node:18-alpine

# Install 'serve' to serve the build files
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/frontend/dist ./dist

# Expose port (default for 'serve' is 5000, but we'll use 3000)
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist", "-l", "3000"]
