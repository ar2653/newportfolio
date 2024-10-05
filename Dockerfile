# syntax=docker/dockerfile:1

# Define the Node.js version
ARG NODE_VERSION=20.9.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Vite"

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Build stage
FROM base as build

# Install only the necessary packages for building
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
        build-essential \
        node-gyp \
        pkg-config \
        python-is-python3 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package-lock.json package.json ./
RUN npm ci --include=dev

# Copy the rest of the application code and build
COPY . .
RUN npm run build

# Final stage: create a minimal image
FROM nginx:alpine

# Copy the built application from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Start the NGINX server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
