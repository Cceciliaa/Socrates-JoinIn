This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project description

Class participation in large humanity or social science lectures is typically lower. However, both students and professors want more interactions. This demo application, called "Joinin", is designed for the professors and students in such classes, aiming to facilitate the communications between them. In particular, it helps to keep students engaged by enabling them to either contribute an answer or vote on an answer whenever the professor asks an open-ended question.

### Remark

This is only a demo rather than the final version of the app. It shows the interfaces of both the professors and the students, and illustrates the basic flow of our design. The orange background indicates the professor's interfaces, and the blue background indicates the students'. 

### Functionality

The professor can input the question from his interface. On submission, the app will randomly select four students from the recorded name list, and push the question to their interfaces. The four selected students will have to input their answers within some time limits, and their answers will later be sent to the rest of the students as four answer choices. Students receiving the multiple-choice question can vote for the answers that they agree with by clicking on them. After the voting session, the professor can get the voting result by click on the "validate" button, base on which he can grasp the learning pace of his students, and explain the question by analysing the four answers.

### App deployment

Link to [Heroku CLI](https://joinin-socrates.herokuapp.com)

### Future improvement

i> Add a toggle for the professor at the input question interface, allowing him or her to choose whether to allow anonymous answers to the current question or not.

ii> Add a "None of the above" buttom as well as an optional input bar at the interface of students voting for the answers, allowing them to contribute their alternitive answers.

iii> Seperate the operation ports of the professors and students, and share data through firebase.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
