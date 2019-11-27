# Build
#Specify a base image
FROM node:alpine as builder 

#Specify a working directory
WORKDIR '/app'

#Copy the dependencies file
COPY . .

#Install dependencies
RUN yarn

# Update config to link gsap packages
COPY react-scripts.webpack.config.js app/node_modules/react-scripts/config/webpack.config.js

#Build the project for production
RUN yarn build

# Deploy
FROM nginx:1.17

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]