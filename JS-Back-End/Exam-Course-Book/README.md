## Express MPA SoftUni course app

1. Initialize project (install all packages, nodemon, bcrypt, express, express-handlebars, jsonwebtoken, mongoose, cookie-parser)
2. Express
   1. setup initial server
   2. add static MW
   3. add body parser MW
   4. add routes modular router
   5. Add home controller example test route
3. Handlebars
   1. config. with express
   2. add views resources
   3. add home controller
   4. add home controller to routes
   5. add main layout
   6. render home page
4. Database
   1. setup DB connection
   2. connect to DB events (optional)
   3. add User model
5. Register
   1. fix register form
   2. add auth controller (view, route)
   3. add auth service
   4. hash password
   5. check confirmed password
6. Login
   1. add cookie-parser MW
   2. convert jsonwebtoken to promise based via util.promissify
   3. fix login form
   4. add login page get/post
   5. add login auth function
      1. validate user
      2. validate password
      3. generate token
   6. return cookie to client
7. Logout
8. Authorization & authentication
   1. add Auth middleware
   2. check token if guest
   3. verify token
   4. add user to req.user object and res.locals (handlebars global usage)
   5. use authMW in index.js before routes
   6. add isAuth route guard
9. Error handling
   1.  add notifications
   2.  add try/catch to login/register post methods
   3.  add getErrorMessage util
   4.  update login/register forms to keep data on errors
10. Last minute fixes to framework
   1.  dynamic navigation (guest vs. user)
11. Add course model
12. Update User model with relations