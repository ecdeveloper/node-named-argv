node-named-argv
===============

A simple node.js module that helps adding named parameters to a node app call

Installing
==========

    npm install named-argv
    
Usage
=====

You may use both '--' and '-' prefixes for your named parameters:

    node myapp.js --opt1=value1 -opt2=value

You may also pass unnamed parameters:

    node myapp.js unnamed1 unnamed2
    
In your code: 

    var argv = require('named-argv');
    console.log(argv.opts); // opts object contains all named parameters 
    console.log(argv.params); // array, contains all unnamed parameters
    
Passing arrays to arguments? Yes, it's possible:

    node myapp.js --optarr=val1 --optarr=val2 --optarr=val3