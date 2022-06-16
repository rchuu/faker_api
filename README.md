Intial Backend Server Setup (Express/Node)

setup project folder and add server.js

cd in to project folder in CLI

"npm init" or "npm init -y" to intialize the folder to take in node pakage manager request and also it generates pakege.jason

"npm install express" will install node modules in the project folder which has all the dependencies for backeend (express).

Write following code base in the server.js and run "node server.js" in CLI to see the console.log statement (You have successfully connected to port 8000).

const express = require('express')
const app = express()

app.listen(8000, () =>
console.log('You have successfully connected to port 8000')
)

Problem with "node server.js" is everytime we make change to file we will have to restart the server by tiping "node server.js", but there is a solution to that. We can simply install nodemon globally by typing following command. (This is done only once since we are installing this globally)

sudo npm install -g nodemon
Now since we have nodemon install globally type this follwing in the CLI, which allows server.js file to run attomatically after user saves a file. Nodemon is monitoring node/server changes after every save.

nodemon server.js
Project Dependency

For this project we want to install faker pakage from npm(node pakage manager)

npm install @faker-js/faker --save-dev
more about Faker on - https://github.com/faker-js/faker