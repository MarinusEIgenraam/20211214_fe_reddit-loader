# Redddit - Post loader

- This application can be installed and launched as described below.
  - (from the project folder) **npm install** 
    - installs the dependencies -> dependencies are used to give react extra options
  - **npm run build**
    - initiates the .env file
  - **npm run start**
    - launches the application

# Environmental files (.env)
- Normally react makes git ignore .env files but for this special project I adjusted that
- The .env files can contain environmental constants that can be used throughout the complete app by importing them

# Folderstructure
- **assets** = supportive files like images
- **components** = the building bricks of the application
  - _layout_ = containers for positioning the content 
  - _pages_ = compilations of components serving one purpose
  - _shared_ = small components that can be used anywhere
- **context** = to manage global app states these providers wrap the app 
  - _AuthContext_ = can manage the authentication state of the user in the app
- **helpers** = helper functions that can be imported in components to fulfill a task
- **routes** = as a user is authenticated the app functions expend with private routes

# SCSS - Styling
- Every separate component has its own scss file that can style the different elements
- The App.scss contains "root" variables that can be called upon in all other scss files with var("name of variable") 
- It's a little messy but hey I didn't get paid very well either

# Loading and error handling 
- You can check what happens is we have loading difficulty by changing (REACT_APP_REDDIT_LOAD_TIMER)
- You can check the error management by changing links in .env (REACT_APP_REDDIT_API_HOT)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
