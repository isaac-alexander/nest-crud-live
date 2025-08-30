FROM node:16

# Create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package*.json ./

RUN npm Install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run" , "start:prod" ]