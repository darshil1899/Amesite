# Stage 1: Build the Angular application
FROM node:14 as build

# Set the working directory to the root of the Angular app
WORKDIR /app


# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Angular app
RUN ng build

# Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine

# Copy the build output from Stage 1 to Nginx's default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
