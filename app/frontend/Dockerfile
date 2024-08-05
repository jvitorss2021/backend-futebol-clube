# Use a base image with Node.js installed
FROM node:16.14

# Set the working directory inside the container
WORKDIR /app-frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port that the frontend will run on
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]