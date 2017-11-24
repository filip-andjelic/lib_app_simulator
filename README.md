# New Front-End Library App

This small app is good example on how web can be used to bring quick, smooth and effective UX to customers. Techs and libs used in this app are: 

      - AngularJS
      - jQuery (included)
      - SASS
      - Lodash Library
      - NodeJs
      - Gulp
      - FontAwesome
      
Project is yet to be finished with Mocha tests, documentation and more features. Settings page is not build, so it's not accessible. Editing books feature is yet to come. If any suggestion comes to your mind, feel free to submit it to -  `filip.adjelic.private@gmail.com`.

## - How to start project and serve the app

After downloading project files, extract them on desired location. Before you do anything, make sure you have NodeJS installed on you device. If you haven't updated NodeJS in some time, it may be good to do so. If you ride your device on Mac/Linux, run command in console - `sudo n stable`, and you are ready to go. Alas, your PC will need to go through NodeJS .msi installation again in order to update. 

If you haven't installed NodeJS before, please download and install appropriate version from this page - `https://nodejs.org/en/download/`. Also, make sure that `node` command is global, accessible from any part of device storage.

Now, direct your console/command prompt to folder where you extracted project. All you need to do is run following command - `npm install`. Now, all Node packages are put in place, and magic can begin!

In order to serve files on Node simulated server, just run `gulp` command in same folder where you ran node command before. If you take a look at `package.json` file, you'll see some scripts named there. At the moment, they aren't useful at all, as `eslint` and `mocha` and `webDriverIO` aren't set. But we'll leave them be for now, they'll be user in near future. 

Our app will be served on port `8080`, so hit `http://localhost:8080/` in your favorite browser.
 
 ## What to expect from our App ?
 
 Well, never expect too much, and you'll never be dissapointed! No kidding, our project is in development, so minor issues are possible. But, we guarantee you'll never get `console error` in any browser. Due to lack of funds, we din't employ any app tester nor UX designer in this project. So, don't be to picky about edges, colors, and similar details. :) This app is tested in newest versions of Safari, Mozzila and Chrome, so we can't guarantee it'll look nice in other or older browsers. It's grid is configured using `flex` CSS property which isn't supported in older browser's versions. Browsers' backwards compatibility is yet to be implemented.