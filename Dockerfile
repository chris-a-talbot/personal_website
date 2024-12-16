# Stage 1: Build the React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json from the frontend directory
COPY frontend/package*.json ./frontend/

# Change into the frontend directory
WORKDIR /app/frontend

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the frontend source code
COPY frontend/ ./

# Build the application
RUN npm run build

# Stage 2: Serve the app using a static server
FROM node:18-alpine

# Install 'serve' to serve static files
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/frontend/dist ./dist

# Expose the port used by the static server
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "dist", "-l", "3000"]
