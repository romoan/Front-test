## Clone the project

	https://github.com/romoan/Front-test.git
or

	git@github.com:romoan/Front-test.git


## Run the app

Since it is a full js app, it doesn't really need a server to run. Nevertheless it needs to read a JSON file and it is performed with an AJAX call, so if you want to run the app directly **it must be in Firefox** which is the only browser that has no issue with local routes in XMLHttpRequest.

That being said, I decided to version the dist directory that is the compiled app. To run the app, just **open with Firefox**:

	./dist/index.html

## To run the app on any browser:

## Install Node.js and npm

https://www.npmjs.com/get-npm

https://nodejs.org/en/

## In the project directory get all dependencies

	npm install

## Run the application in dev mode
	
	npm run dev

This serves the app in http://localhost:8080/

## Production mode
In **./dist** directory is the Prod mode compiled project. To recompile the project (not necessary if you don't change anything since it is versioned):

    npm run build

You can access the app through **./dist/index.html** although this doesn't work for most of browsers due to the AJAX call for the JSON file.

It works in Mozilla Firefox, though. **For other browsers**, you'll need to launch it in a server like http-server https://www.npmjs.com/package/http-server
