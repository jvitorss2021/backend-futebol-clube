# Use a Node.js base image
FROM node:16.14-alpine

# Set the working directory inside the container
WORKDIR /app-backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application will be running on
EXPOSE 3001

# Start the application
ENTRYPOINT ["npm", "run"]
