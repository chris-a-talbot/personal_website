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

# Install serve and curl for healthcheck
RUN apk add --no-cache curl && \
    npm install -g serve@latest

# Copy only the built files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# Start the app with explicit serve command
CMD serve -s dist -l 3000 --no-clipboard --no-request-logging