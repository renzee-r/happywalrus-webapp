# base image
FROM node:10

# set working directory
WORKDIR /app

COPY . ./
COPY react-scripts.webpack.config.js app/node_modules/react-scripts/config/webpack.config.js

RUN yarn
RUN yarn build

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install
# RUN npm install react-scripts@3.0.1 -g

# start app
CMD ["npm", "start"]