# Behre_Infrastructure
![Alt text](frontend/public/icon.png?raw=true "Title")

This repo contains all the infrastructure for the all purpose event service "Behre"


If you wanted to host this website on your own computer, you would have to follow these steps:
Install node.js from the official distribution and clone the repository into your project folder.
Also install the packages used by this website, by typing:

`npm install express-handlebars | npm install express`

Navigate to the /frontend directory inside and try to run the main application by typing the command:
`node app.js`

This should give a nonsensical output and a commandline feed which represents the server starting.
You can test if everything worked by going to 

localhost:3000/home

which should now host the sites main page.
To stop the hosting just type ctrl-C inside the terminal or close the terminal entirely.
