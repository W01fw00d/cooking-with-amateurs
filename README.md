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

Run a MongoDB instance and then:

```
npm run dev-back
```

If you need to restart the server:

```
rs
```

- chemistry-ui as local dependency (for development and testing)

"npm link" is useful, but there're some issues regarding having different "react" and "react-router-dom" instances.

To solve this, you can execute this bash script that will perform the correct linking:

(Note: You can use Git Bash to be able to execute that in Windows)

```
sh link.sh
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

Run on console

```
npm run ftest
```

Run only a spec

```
npm run ftest-spec cypress/integration/[spec-file-name].spec.js
```

Run with Cypress UI

```
npm run ftest-ui
```

### Prod Environment

1. Install dependencies

```
npm install
```

2. Build the Frontend code

```
npm run build
```

3. Run the Production Server

```
npm run start
```

## Functional description

- When the App is launched, real data como from node.js server.

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

- [Chemistry-UI](https://github.com/W01fw00d/chemistry-ui) (my own Components Library, based on Material-UI)

- Prettier, ESLint (code style tools, based on airbnb conventions)
- Husky (pre-commit automated formatting tool)

- Heroku (deploying free site for this App Demo)

## Technical discusion

- A pre-commit has been added to this repository to help maintain a coherent code style, even if new developers were added to this project in the future.

- Literals are not hardcoded but instead passed down to components by props in order to implement a multilanguage support system in the future.

- A random number and string generator has been added to Cypress Tests in order to garantee that different data will fit correctly on the UI (for example, this simulates the effect of having different languages).

- Build and unit tests are executed on the CI in GitHub with every push to master and pull request.

## Atribution

- [Logo created by Marta Ximenis](https://www.domestika.org/es/projects/692722-cocina-con-amateurs) @XimenisMarta

- Favicon formatted from logo with [favicon-generator](https://www.favicon-generator.org/)

- Recipes data and photo recopilations by Mateu

- Translations by @XimenisMarta
