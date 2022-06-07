# Highschool App
A simple management app for educational centers built in:
- Backend
    - Node.js
    - Typescript
    - MySQL
    - Docker
- FrontEnd
    - React.js
    - Typesctipt
    - Axios
    - Sass
    - Bootstrap (PENDING)

## Dependencies
We're going to use the Node.js HTTP class instead of Express.js

```
npm i bcrypt concurrently dotenv jsonwebtoken
```
```
npm i -D nodemon
npm install -D ts-node
```
```
npm i @types/bcryptjs
npm i @types/jsonwebtoken
```
## Commands
Brew list of useful commands

- Init the entire app
```
npm run dev
```
- Init Server
```
npm run server
```
- Init Client
```
npm run client
```
## Docker Components
List of main docker images that we need.
- Node by Dockerfile
- MySQL image

To build or image:
```
docker build . -t image_name
```
A most detailes example could be:
```
docker run -d --name <container_name> -p host_port:container_port --env-file=.env <image_name>
```
- Simple mysql image
```
sudo docker run --rm -d --name nombre_mysql -e MYSQL_DATABASE='test_db' -e MYSQL_USER='user' -e MYSQL_PASSWORD='secret' -e MYSQL_ROOT_PASSWORD='secret' mysql:latest
```
## Docker-Compose
We use Docker compose to combine both of the images that we want to use: Server and database

To do this we need to create a file called 'docker-compose.yml'

## Docker Commands
We can use the following commands to operate with our docker app:

- list all docker images
```
sudo docker image ls
```
- list all docker containers
```
sudo docker container ls
```
- remove all our images
```
sudo docker rmi $(sudo docker images -aq) 
```
- docker compose's command to build images and up
```
sudo docker-compose up --build
```
- Set own docker-compose services
```
sudo docker-compose down
```
