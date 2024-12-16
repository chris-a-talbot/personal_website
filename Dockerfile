# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app/frontend

# Copy only the package.json and package-lock.json first for efficient caching
COPY frontend/package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the source code from the frontend directory
COPY frontend/ ./

# Build the application
RUN npm run build

# Stage 2: Serve the app using a static server
FROM node:18-alpine

# Install 'serve' to serve static files
RUN npm install -g serve

# Set working directory for the runtime
WORKDIR /app/frontend  

# Copy the build output from the previous stage
COPY --from=builder /app/frontend/dist ./dist

# Expose the port used by the static server
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "dist", "-l", "3000"]