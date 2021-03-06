# learn-es6 the hardway.
**through live coding, tutorials, testing, debugging and version transpiling**
##### A VERY DETAILED INTRODUCTION.

##### NB: this is a work in progress, so any contributions are very much welcome.

**This contributions might include:**
- [x] - bug fixes
- [x] - correcting any false statements in docs.
- [x] - new and helpful topics in es6
- [x] - code samples that can serve as teaching tools.

*all codes should be tested and debugged. if you create a new directory, don't worry about updating package.json*


## FEATURES

**`DOCS`**

this folder contains tutorials on almost all the new concepts in es6. the tutorials are structured in a specific files with the name of the topic as the filename.

**`ES5`**

this folder will contain all the codes that are transpiled or compiled from es6 to es5.

**`ES6`**

this directory contains or will contain code samples that are not for tutorial purposes but are written in es6. do not expect the files over here to have detail documentations on implementations.

**`.babelrc.json`**

the babel configuration file.

**`.eslintrc.json`**

the eslint configuration file

**`package.json`**

basic configuration.

#### NB: tutorials in the docs are excerpted from great contents on the internet, especially from MDN.


## TOOLING

**`babel`**

babel is used for transpiling codes from es6 to es5. babel is used for evaluating scripts.
Runs to check if your script contains any errors. Don't worry about configurations, they are already setup

**`eslint`**

for debugging and testing your codes, I used eslint to check the codes for any errors that might occur in your code.
run the command to to use the feature. Dont worry about setup. already done.
Anyone familiar with eslint can go into the eslint file and add more configurations and modify the file.


## REQUIREMENTS

- [x] commandline
- [x] node
- [x] npm
- [x] clone this repo and cd into it.
- [x] run npm install


## USAGE or COMMANDS.

#### BUILDS

**`npm run build:docs`**

this command compiles all the files in the docs and places them in the es5 directory.


**`npm run build:es6`**

compiles all the files in the es6 folder into the es5 folder.


**`npm run build `** + filepath

the arguments takes a particular file you want to compile.

eg. **`npm run build docs/class.js`** // builds the class file from the docs folder into es5 folder.


**`npm run build:watch`** + directory

this a command takes the directory you want to build the files from and as long as you modify any file in that
directory, it gets transpiled into the es5 folder.
eg: **`npm run build:watch es6`** // transpiles changed files in the es6 directory into the es5 directory.


#### TESTS.

**`npm test`** + filepath

this tests the functionality of the file that is passed to it. if it works as expected. by logging outputs to stdin
eg. **`npm test docs/object.js`** // runs the object.js file in the docs folder.


**`npm run test:watch`** + directory

This command watches the directory and the run any file that has being modified in that particular directory.
It uses the node environment to run files.
eg. **`npm run test:watch es6`** runs any files modified in es6

#### LINTS

**`npm run lint:docs`**

this command uses eslint to check all the files in the docs directory for errors.


**`npm run lint:es6`**

checks all the files in the es6 directory for errors.


**`npm run lint`** + filepath

the argument over here is the name of the you want to lint.

eg: **`npm run lint docs/template.js`**


**`npm run lint:watch-docs`**

this command watches the docs directory and then lints any files that have being changed.


**`npm run lint:watch-es6`**

when you want to test the code for functionality purposes. for instance in case you want to run the code to see if it works as planned by logging to the console or whatever action it is. this command is your new friend.


**`npm run lint:watch`** + directory

It takes the directory where the file resides. generally any file at all you changed in that directory gets linted.
specify that directory to lint all changed files.
eg: npm run lint:watch tests/   // watches the files in the tests directory and lints anyone that is changed.


## Need help?
Feel free to [create an issue](http://github.com/DannyMcwaves/learn-es6/issues), [tweet me](http://twitter.com/DannyMcwaves), or [send me an email](mailto:dannymcwaves96@gmail.com). I'd be glad to help where I can! Can you make this repo better. Please CONTRIBUTE to it.

:smile::smile::smile::smiley::+1::+1::+1::ok_hand::metal::hand::raised_hands::muscle::clap::wave:
