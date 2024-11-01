# Use an updated, lightweight Node.js image
FROM node:18-alpine

# Create directory and set ownership to the non-root user
RUN mkdir -p /home/node/node-api-daip/node_modules && chown -R node:node /home/node/node-api-daip

# Set working directory
WORKDIR /home/node/node-api-daip

# Copy package files and install dependencies
COPY package*.json ./
USER node
RUN npm install

# Copy the rest of the application code
COPY --chown=node:node . .

# Expose the port that the app runs on (update if necessary)
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
