#build environment
FROM node:16-alpine as build
WORKDIR /angular-app
COPY . ./
RUN npm install
RUN npm run build

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY --from=build /angular-app/dist /usr/share/nginx/html

#NOTE this is if you wanted to use express.js (You'll need the index.js file too!)

# FROM node:18-alpine
# WORKDIR /angular-app
# COPY ./ /angular-app
# RUN npm install -g @angular/cli
# RUN npm install
# RUN npm run build
# EXPOSE 4200
# CMD [ "node", "index.js" ] 