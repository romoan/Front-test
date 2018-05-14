#Clone the project

	git clone https://RobeMoreno@bitbucket.org/RobeMoreno/front-test.git
or

	git clone git@bitbucket.org:RobeMoreno/front-test.git

#Install Node.js and npm

https://www.npmjs.com/get-npm

https://nodejs.org/en/

#In the project directory get all dependencies

	npm install

#Run the application in dev mode
	
	npm run dev

This serves the app in http://localhost:8080/

#Production mode
In dist directory is the Prod mode compiled project. To recompile the project (not necessary since it is versioned):

    npm run build

You can access the app through ./dist/index.html although this doesn't work for most of browsers due to the ajax call for the JSON file.

It works in Mozilla Firefox, though. For other browsers, you'd need to launch it in a server like http-server https://www.npmjs.com/package/http-server
