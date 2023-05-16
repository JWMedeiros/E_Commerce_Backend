# Base image
FROM node:19-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port (assuming your application listens on port 3000)
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]