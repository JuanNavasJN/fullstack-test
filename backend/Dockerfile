# Use the official alpine Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package.json ./
COPY yarn.lock ./

# Install production dependencies.
RUN yarn

# Copy local code to the container image.
COPY . ./

RUN yarn build

EXPOSE 3030

# Run the api on container startup.
CMD [ "yarn", "start:prod" ]