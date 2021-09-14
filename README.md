# Welcome to Boredom (skip) App!

This project is part of a technical test.

## Features Status

###Login
- When the app starts, the user is taken to a public route called /login.
- The user must introduce a name before being able to enter the App.
- The name must be validated. Let it only introduce alphabetic characters.
- This name must be persisted in a way that can be used later on. If the user reloads the
application it can pass directly to the dashboard.
Dashboard: Table
Show a table that retrieves activities from API and:
- Shows 10 random activities
- Ability to search by name.
- Ability to order by column
- Button for retrieving new data from API (refresh)
- Add multiple activities to favorites at the same time. In the mockups you can find a
possible solution: next to search input there is a favorite button. This button should be
disabled if no rows are selected. When some rows are selected it becomes enabled and
serves as the button to add favourites in bulk. Can you find another/better way to
perform this task?
- Ask for more than 10 random activities and show a pagination to navigate between
them (max 10 activities per page). What are the things that you should take into
account when paginating?
Side Panel
Open a side pane over the main dashboard. (Google Tag manager side panes are a good
example).
- Show a list of favourited activities and their information.
- Let the user remove a favourite activiti from the list
- Can you make these favourite activities persist between reloads?
Dropdown
Program a dropdown that lets you log out and open the Side Pane with your favorites list.
Modal
No mockups provided for this task. Create a call to action wherever in the dashboard you think
suits best. This CTA should open an overlay modal over the dashboard and will provide the user
with one random activity to do and its details.





In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
