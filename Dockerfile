FROM node:10
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY . /usr/src/app
RUN npm install 
RUN mkdir /usr/src/app/storage
EXPOSE 15000
CMD [ "node","app"]