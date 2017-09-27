# TypeScript + Browserify + Buildify

This example uses the following steps to build application:

- tsc : compile all TypeScripts in "src" folder and transfer to "bin" folder
- browserify : modularize the client.js script in "bin" folder in one file and transfer it to "public"
- buildify : minify the client.js in "public"

## Installing dependencies:

`npm install`

## To compile:

`node build.js`

## To start:

`npm start`