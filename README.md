# Quick Start Guide

This is the repo that contains the code to check for device orientation using either CSS(SCSS) or Javascript. The orientation check code inside ```home.sccc``` is commented out. The code as it is checks the device orientation in javascript (see ```index.js``` under **app/pages/Home** folder). Check out this Youtube video for details:

https://youtu.be/n9P3dmWuHVQ

Download or clone the project on your local drive. Open Terminal (Command prompt) and navigate to the project folder. Then run ```npm install```. You should see a new folder called **node_modules** in the project folder.

During **Development**, from the terminal, inside the project folder, run ``` npm start``` command to start the server. You should see a new folder called **public** in the project folder with compiled css, javascript and all the files in the static folder. You now can visit ***localhost:3000*** in your browser to access the home page.

For **Production**, make sure to run ``` npm frontend:prod``` command inside the project folder.
