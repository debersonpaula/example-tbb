const tsc = require('./compiler/tsc');
const browserify = require('./compiler/browserify');
const buildify = require('./compiler/buildify');

process.stdout.write('Start compile on tsc...');
tsc('tsconfig.json');
process.stdout.write('compiled!');

process.stdout.write('\nStart compile on browserify...');
browserify('./bin/client.js','./public/client.js',function(){
    process.stdout.write('compiled!');
    process.stdout.write('\nStart compile on buildify...');
    buildify('./public/client.js','./public/client.js')
    process.stdout.write('compiled!');
});