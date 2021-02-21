# JavaScript & Browser Support
     Browser Features ('browser APIs')
          The browser decides which features it offers
          Examples fetch(), geolocation, DOM API
          Implemented individually

     JavaScript Syntax
          The browsers JS engine defines which JS syntax/ version is supported.
          Examples: let, const, async/await, Promises
          Implement individually or in chunks e.g. ES6

Is a feature available?
     MDN
          check feature article - browser support table at the bottom.  Also often includes notes, fallbacks, workarounds(if support is missing)
     caniuse.com
          Search for a feature name to get a detailed overview table(including browser market shares)
          Also includes notes, fallbacks, workarounds(if support is missing)
     Google 
          Google "fetch javascript browser support" and check results.
          For more complex issues, Stackoverflow discussions can be helpful.
     ES6/JS Compat Table
          For next-gen JavaScript synatax(!) features, check this overview table.
          Provides detailed feature split and also includes support of transpilers.

Naive thought: Support All Browsers & Browser Versions
     DONT DO THIS - Analyze your market, who will your users be?

# Babel

Use babel-loader - npm install --save-dev @babel-loader @babel/core @babel/preset-env
 modify the webpack.config file with the script provided from the babel-loader github page.  then modify the package.json file to add the browsersList: key set it to whatever browsers you want to support. In the case of this project > 0.2%, not dead.  

# Polyfills

     npm install --save core-js
     npm install --save regenerator-runtime

modify the webpack.config files to include the useBuiltIns: 'usage' key in the presets array and set the array to a nested array or an array inside of an array.  Also have to add another key, the corejs: { version: 3 } key to both webpack.config files, now I can use the polyfills as needed. 
     

### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

Babel (Official Docs): https://babeljs.io/docs/en/

babel-loader Docs: https://github.com/babel/babel-loader

@babel/preset-env Docs: https://babeljs.io/docs/en/babel-preset-env

core-js Docs: https://github.com/zloirock/core-js