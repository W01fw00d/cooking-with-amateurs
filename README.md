<div align="center">
  <img alt="Cooking with aMateuRS Logo" src="https://github.com/W01fw00d/cooking-with-amateurs/blob/master/public/logo.png?raw=true" width="350" title="by Marta Ximenis">
</div>

![Node.js CI](https://github.com/W01fw00d/cooking-with-amateurs/workflows/Node.js%20CI/badge.svg)

[**Demo of the App**](https://cooking-with-amateurs.herokuapp.com/#/list)

## How to use

### Dev Environment

1. Install dependencies

```
npm install
```

2. Deploy Front App

```
npm run dev-front
```

3. Deploy Back App

Install and run a MongoDB instance and then:

```
npm run dev-back
```

- chemistry-ui as a local dependency (for development and testing)

"npm link" is useful, but there are some issues regarding having multiple "react", "react-dom" and "react-router-dom" instances running.

To solve this, you can execute this script that will perform the correct linking:

```
npm run dev-link
```

- Launch Jest (Unit Tests)

```
npm run utest
```

Launch with coverage

```
npm run utest-cover
```

Open '.../coverage/lcov-report/index.html' to see the coverage report

- Run Cypress (Functional Tests)

```
npm run dev-front
```

Run on console (mobile screen by default)

```
npm run ftest-mobile
```

Run on console (desktop screen)

```
npm run ftest-desktop
```

Run all scenarios with a @core tag (critical test cases)

```
npm run ftest-core
```

Run with Cypress UI

```
npm run ftest-ui
```

- Development/debugging note: you can add the `@focus` tag to a `Cucumber` feature scenario to force `Cypress`` to only execute that scenario

- If cypress is not installed properly, try:

Prune your cache:

```
./node_modules/.bin/cypress cache clear
```

Then install cypress:

```
./node_modules/.bin/cypress install --force
```

### Prod Environment

1. Set the `MONGODB_URL` environment variable in your node environment with your DB URL.

In Heroku, that can be done using `Config Vars`.

2. Install dependencies

```
npm install
```

3. Build the Frontend code

```
npm run build
```

4. Run the Production Server

```
npm run start
```

- If you want to run the Production Server but with Localhost MongoDB instance (for testing purposes)

```
npm run dev-start
```

## Functional description

- When the App is launched, real data comes from the Node.js server.

- When Cypress Tests are launched, fake data is used from randomized JSONs.

## Technical Stack

</br>

<div align="center">
  <img width="55" src="https://github.com/W01fw00d/chemistry-ui/blob/master/public/chemistry-ui-logo.png?raw=true"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/javascript.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/typescript.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/typescript-icon.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/preact.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/mongodb.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/nodemon.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/progress.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/webpack.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/jest.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cucumber.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cypress.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/eslint.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/prettier.svg"/>
</div>

</br>

- TypeScript

- React

- Node
- MongoDB

- Babel (compilation)
- Webpack (bundling)

- Jest (Unit Testing Tool)
- Cypress (Integration Testing Tool)
- Cucumber (Preprocessing Testing Tool)

- [Chemistry-UI](https://github.com/W01fw00d/chemistry-ui) (my own Components Library, based on Material-UI)

- Prettier, ESLint (code style tools, based on Airbnb conventions)
- Husky (pre-commit automated formatting tool)

- Heroku (deploying free site for this App Demo)

## Technical discussion

- Mobile-First Design: App is always designed, implemented and tested in Mobile Devices Screens first (Cypress tests run in Mobile Screen by default).

- A pre-commit has been added to this repository to help maintain a coherent code style, even if new developers were added to this project in the future.

- Literals are not hardcoded but instead passed down to components by props to implement a multilanguage support system in the future.

- A random number and string generator have been added to Cypress Tests to guarantee that different data will fit correctly on the UI (for example, this simulates the effect of having different languages).

- Cucumber is used as a preprocessor for Cypress Tests, to make tests more readable for non-tech collaborators. This allows us to use use them as specifications too, as they represent the User Journey in this App.

- Build and unit tests are executed on the CI in GitHub with every push to master and pull request (currently disabled).

## Attribution

- [Logo created by Marta Ximenis](https://www.domestika.org/es/projects/692722-cocina-con-amateurs) @XimenisMarta

- Favicon formatted from the logo with [favicon-generator](https://www.favicon-generator.org/)](https://www.favicon-generator.org/)

- Recipes data and photo compilations by Mateu

- Translations by @XimenisMarta
