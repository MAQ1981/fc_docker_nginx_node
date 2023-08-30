FROM node:18

WORKDIR /usr/src/app
COPY . . 
RUN apt-get update && apt-get install vim wget -y
 
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz
RUN tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz 
RUN rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000
