# Tooling And Workflows

Development server -webpack-dev-server Or serve standalone tool - serve under more realistic circumstances.
Bundling tool - webpack - Combine multiple files into bundled code(less files)
Code optimization tool - webpack - Optimize code(shorten function names, remove whitespace)
* Code Complication tool - Babel - Write modern code, get "older" code as output
Code quality checker - ESLint - Check code quality, check for conventions and patterns.

Workflows 
     Development - Linting(ESLint) - Bundling(webpack) - Reload Dev Server.

     Production - Linting(ESLint) - Bundling(Webpack) - Compilation(Babel) - Optimization - Production-ready code.

## Install specific packages that are exclusive to this project and not global.

1.  Create an npm configuration file - npm init
2.  Install project specific packages with npm - 
     npm install --save-dev eslint
3. For windows users, ctrl + shift + p to open up the search toosl and type in eslint, then select create eslint configuration.  When the options list comes up for this project choose the last option, to check syntax, find problems and enforce code style. Then select the first option from the next list JavaScript modules(import, export).  Next for frameworks select none of these. Next does your project use typescript, select no. For where does your code run, select browser.  For would you like to define a style for your project, select the last option, inspect your JavaScript files.  For which files should be examined, choose, assets/scripts/app.js.  For the last option what format do you want your config file to be in, select the last option JSON. 
Go through the eslintrc.json file and look at all the rules and set them according to my style.   For this project, we remove all of the rules except the rule about quotes.

### Configuring ESLint
ESLint offers a lot of different options so that you can really fine-tune it exactly to your requirements.

You can set up your own rules from the ground up (basically what we started doing in the lectures) but you can also use presets and pre-configured rulesets.

To fully understand all options you can configure in .eslintrc.json, this part of the official docs should be helpful: https://eslint.org/docs/user-guide/configuring

To explore all available rules and what they mean, explore this part of the official docs: https://eslint.org/docs/rules/

Want to use a preset? Here you go: https://www.npmjs.com/search?q=eslint-config (just click on one of the results and follow the instructions provided there)

Also check out the docs in general: https://eslint.org/docs/user-guide/getting-started

### mportant: Webpack Version
Important: In the next lecture, we'll add a tool called "Webpack".

Make sure you install version 4 of that tool by using npm install --save-dev webpack@4 --save-exact wepack-cli
On the root level of the project, next to the .eslintrc.json file create a webpack.config.js file.  Also on the root level create a folder called src or source to represent the input source files and move the contents of the script folder, i.e. the App folder, Utility folder and their contents along with the app.js file into the src or source folder, thus leaving the assets and script folders empty as they will then become the output source folders. Modify the package.json file to include the following - "build": "webpack" to tell webapack use the cli when bundeling this app.

### Bonus: Multiple Entry Points
In the example project, we only have one main entry point: app.js.

In bigger projects - with multiple HTML pages - you might have multiple scripts for the different pages (HTML files) you might be building. Hence you might need more than one entry point because you want to build more than one bundle (i.e. not every HTML page uses the same script).

This can easily be configured with Webpack:

Instead of

entry: './src/app.js'
use

entry: {
    welcome: './src/welcome-page/welcome.js',
    about: './src/about-page/about.js',
    // etc.
}
Now Webpack will look up all these entry points and create one bundle per entry point - you can then link to these bundles in your respective HTML files.

A simple rule that makes sense for most projects is:

One entry point per HTML file because you typically have one script per HTML file.

If you share a script across multiple HTML files or you have a file that does not need any script, you of course can deviate from that rule.

You can learn more about multiple entry points with these two resources:

Code Splitting (i.e. generating more than one bundle): https://webpack.js.org/guides/code-splitting/

Entry Point Configuration: https://webpack.js.org/concepts/#entry

And in general, check out the official Webpack docs to dive into it in detail: https://webpack.js.org/guides/

BE SURE TO INCLUDE THE PUBLIC PATH SO THAT WEBPACK POINTS TO THE OUTPUT FOLDER.

Install the webpack development server - npm install --save-dev webpack-dev-server

Once the webpack development server is installed, you would add the devServer key in the webpack.config.js file if your html files are not located in the root of the project. Modify the package.json file and add a script to build the development server and use npm run build:dev or whatever name you give the script.

or webpack-cli >= 4. x, use npx webpack serve command to run local server. The new version is in the Beta phase and likely to fix this bug. I fixed this solution by running npm start which was just a wrapper running 'webpack-dev-server' rather than running webpack-dev-server directly into the console. Keep this server running until you are done for the day.  

Generating sourcemaps
add the devtool: key to the webpack.config.js file, and set the value to what works for me.

Building for production

create a new webpack.config.prod.js file, copy the code from the webpack.config.js file into the new file, change development to production and in the dev tool key change that value to one like cheap-source-map then go to the package.json file and add a new script like build:prod --config webpack.config.prod.js and use npm run build:prod to start the dev server. 

Now there is two workflows, one for development that we can run all the time that we will use in development and one for production and everytime there is a new production ready change, run the npm run build:prod command again. 

I should remove old files whenever I run the build process, in order to do that install the plugin clean-webpack-plugin using npm.  npm install --save-dev clean-webpack-plugin.  Then modify the webpack config files.

Optimize the code for cleanup on deployment. Web pack can help with this.  In the webpack.config.prod.js file change the filename from an actual filename to [contenthash]; this will generate a new filename each time a build is run

# Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

Official ESLint Docs: https://eslint.org/

Official Webpack Docs: https://webpack.js.org

