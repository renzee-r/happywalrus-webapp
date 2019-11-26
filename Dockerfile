# base image
FROM node:10

# set working directory
WORKDIR /app

COPY . ./

RUN yarn
RUN yarn build

# Update config to link gsap packages
COPY react-scripts.webpack.config.js app/node_modules/react-scripts/config/webpack.config.js

# start app
CMD ["yarn", "start"]