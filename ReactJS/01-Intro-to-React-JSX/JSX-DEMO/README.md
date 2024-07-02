  ### (Using Live server for 1 and 2)

1. Initialize demo
   1. Create index.html
   2. add react/react-dom from legacy docs
   3. add script module to index.js to body
   4. add root div (id root)
2. Add index.js
   1. (note we have global access to react/reactDOM from the html)
   2. Select our root HTML element
   3. create root react element via ReactDOM
   4. create basic react element to illustrate demo
   5. use react root el. to render the example element
3. Add JSX to a project (legacy)
   1. Step 1: Run ***npm init -y*** (if it fails, here’s a fix)
   2. Step 2: Run ***npm install -D babel-cli@6 babel-preset-react-app@3***
   3. rework previous demo to add HEADER with h1 h2 inside of it
   4. add new index with jsx (copy)
   5. do 3 again with jsx syntax
   6. run npx babel --watch src --out-dir build --presets react-app/prod
      1. this will transpile the JS to something the browser can understand
   7. change live server to check build/app.js
   8. add random paragraph to app.js in the Header element and observe browser behaviour (watch build)
   9. add to script (package.json) watch command 
      1.  
        ```
        --watch src --out-dir build --presets react-app/prod
        ``` 

4. 