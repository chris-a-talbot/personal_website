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

# Copy only the built files from builder
COPY --from=builder /app/dist ./dist

# Use node to install serve globally
RUN npm install -g serve@latest

# Expose port
EXPOSE 3000

# Start the app with explicit serve command
CMD serve -s dist -l 3000 --no-clipboard --no-request-logging