FROM node:21.7.2-alpine

WORKDIR /app

COPY package*.json tsconfig*.json /app/

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev

#--------------------------------------------------------------------------------------------------------------------

#When you clone the project, you should go through the following steps to run the project throught Docker.

#1- Install Docker on your system.

#2- Navigate into the project directory.

#3- Build the Docker image using the Dockerfile with
#docker build -t <image_name> .
#Example: docker build -t Posts .

#4- Run the Docker container using
#docker run -p <host_port>:<container_port> <image_name>
#Example: docker run -p 3000:3000 Posts

#5- Finally, you can see the project through the following path
#http://localhost:3000
