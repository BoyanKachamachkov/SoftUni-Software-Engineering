# Express App building algorithm

1. Initialize project
2. Nodemon
   1. [x] install nodemon
   2. [x] config start script
3. Express
   1. [x] install express
   2. [x] start initial express server
   3. [x] add static 
   4. [x] consume static folder
   5. [x] add body parser urlencoded
   6. [x] add routes module
4. Handlebars
   1. [x] install handlebars
   2. [x] config handlebars with express
   3. [x] add views folder with resources
   4. [x] add home view
   5. [x] add home controller
   6. [x] add home controller to routes
   7. [x] add main layout
   8. [x] add partials dir
5. Database
   1. [x] install mongoose
   2. [x] setup db connection
   3. [x] add user model
6. Register
   1. [x] fix navigation links
   2. [x] add register page (controller, view, route)
   3. [x] fix register form
   4. [x] add auth service
   5. [x] install bcrypt
   6. [x] hash password
   7. [x] check confirm password
7. Login
   1. [x] install jsonwebtoken
   2. [x] install cookie-parser
   3. [x] add cookie-parser middleware
   4. [x] Optionally: convert to promise based
   5. [x] add login page
   6. [x] fix login form
   7. [x] add login post action
   8. [x] add auth service login method
      1. [x] validate user
      2. [x] validate password
      3. [x] generate token
   9. [x] return cookie to client
8. Logout
9.  Authentication & Authorization
   1.  [x] add auth middleware
   2.  [x] check token if guest
   3.  [x] verify token
   4.  [x] attach user to request object and res.locals
   5.  [x] use middleware in express
   6.  [x] add isAuth route guard
10. Error handling
    1.  [x] add notifications
    2.  [x] add getErrorMessage util
    3.  [x] add register error handling
    4.  [x] add login error handling
11. Last fixes
    1.  [x] dynamic navigation