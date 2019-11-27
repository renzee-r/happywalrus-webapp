# Build
#Specify a base image
FROM node:alpine as builder 

#Specify a working directory
WORKDIR '/app'

#Copy the dependencies file
COPY package.json .

#Install dependencies
RUN npm install

#Copy remaining files
COPY . .

# Update config to link gsap packages
COPY react-scripts.webpack.config.js app/node_modules/react-scripts/config/webpack.config.js

#Build the project for production
RUN npm run build 

# Update config to link gsap packages
COPY react-scripts.webpack.config.js app/build/node_modules/react-scripts/config/webpack.config.js

# Deploy
FROM nginx:1.17

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]