FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN yarn install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm", "run", "start-docker"]
