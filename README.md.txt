BotUI : is a JavaScript framework to build UI for your bot.  
It has an intuitive JavaScript API to add messages and show actions that a user can perform

To install npm you have to install nvm-setup.exe for windows
C:\Users\ana_m\AppData\Roaming\nvm

install node.js C:\Program Files\nodejs
(restart the cmd to check it was installed)

>nvm -v to check what version (I ran in the cmd curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh)

now install node and npm
> nvm install latest 
to install node package manager (node.js and npm)

(restart the cmd to check npm was installed)

install nodejs C:\Program Files\nodejs\ from https://nodejs.org/en/download/

run command >npm install botui --save

>npm init --yes to create a default package.json on C:\Users\ana_m

{
  "name": "ana_m",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "botui": "^0.3.9"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
