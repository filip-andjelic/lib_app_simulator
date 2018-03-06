# AngularJS Library Demo App

This small one-page presentation demonstrates how to use MVC-like pattern in JavaScript to handle user input and corresponding data displaying. 
Techs and libs used in this app are: 

      - AngularJS-1
      - jQuery (included)
      - SASS
      - NodeJs
      - Gulp
      - FontAwesome
      - LoDash
      - Moment.js
      
Project is incomplete, as functionality isn't fully implemented, design isn't pixel perfect and yet to be finished are Mocha tests, documentation and better optimized automation processes. 
If any suggestion comes to your mind, feel free to submit it to -  `filip.adjelic.private@gmail.com`.

## - How to start project and serve the app

After downloading project files, extract them on desired location. Before you do anything, make sure you have `NodeJS` installed on you device. If you haven't updated NodeJS in some time, it may be good to do so. 
If you ride your device on Mac/Linux, run command in console - `sudo n stable`, and you are ready to go. Alas, your MS PC will need to go through NodeJS .msi installation again in order to update. 

If you haven't installed NodeJS before, please download and install appropriate version from this page - `https://nodejs.org/en/download/`. Also, make sure that `node` command is global, accessible from any part of device storage.

Now, direct your console/command prompt to folder where you extracted project. All you need to do is run following command - `npm install`. Now, all Node packages are put in place, and the fiesta can begin!

In order to serve files on Node simulated server, just type `npm run fiesta` custom command, in same folder where you ran `npm install` command before. If you take a look at `package.json` file, you'll see many dependencies and some scripts named there. 
At the moment, some of them aren't useful at all, as `eslint` and `mocha` and `webDriverIO` aren't set, and some dependencies are yet yo be used in automation tasks, or replaced by newer versions. But we'll leave them be for now, they'll be used in near future. 

Our small demo app will be served on port `7070`, so hit `http://localhost:7070/` in your favorite browser.
 
 ## What to expect from our App ?
 
 Well, never expect too much, and you'll never be dissapointed! No kidding, our project is in development, so minor issues are possible. But, we guarantee you'll never get `console error` in any browser. Due to lack of funds, we din't employ any app tester nor UX designer in this project. So, don't be to picky about edges, colors, and similar details. :) 
 This app is tested in newest versions of Safari, Mozzila and Chrome, so we can't guarantee it'll look nice in other or older browsers. It's grid is configured using `flex` CSS property which isn't supported in older browser's versions. Browsers' backwards compatibility is yet to be implemented, as well as mobile version. Cheers!