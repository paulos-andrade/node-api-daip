# Use an updated, lightweight Node.js image
FROM node:18-alpine

# Create directory and set ownership to the non-root user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set working directory
WORKDIR /home/node/app

# Copy package files and install dependencies
COPY package*.json ./
USER node
RUN npm install

# Copy the rest of the application code
COPY --chown=node:node . .

# Expose the port that the app runs on (update if necessary)
EXPOSE 3000

# Start the application
CMD [ "npm", "deploy" ]
