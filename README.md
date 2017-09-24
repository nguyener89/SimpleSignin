SimpleSignin

This is a work in progress project.

Goal: Create a simple sign in application.

1. Landing page ('/') has a link to the signin page ('/signin')

2. Signin page can create a user (Users will be stored in database)
   Note: Going with aws dynamodb

3. Signin page has recover password feature (Asks a security question to recover username/password)

4. Signin page allows existing users should be able to login

5. Successful login takes users to the Home page ('/home')

Optional:

1. Find a way to prevent users from getting to pages without logging in

To Run:

1. Open console

2. Navigate to root directory of project (path/to/directory/SimpleSignin)

3. npm install // installs node modules for project, must have node and npm

4. npm start // runs the app - localhost:3000 is the index page