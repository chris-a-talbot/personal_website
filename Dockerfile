# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy frontend files
COPY frontend/ .

# Install dependencies
RUN npm install --legacy-peer-deps

# Build the application
RUN npm run build

# Stage 2: Serve the app
FROM node:18-alpine

WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy only the built files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"]