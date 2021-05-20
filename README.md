<img alt="Cooking with aMateuRS Logo" src="https://github.com/W01fw00d/cooking-with-amateurs/blob/master/public/logo.png?raw=true" width="350" title="by Marta Ximenis">

![Node.js CI](https://github.com/W01fw00d/cooking-with-amateurs/workflows/Node.js%20CI/badge.svg)

[**Demo of the App**](https://cooking-with-amateurs.herokuapp.com/#/list)

## How to use

1. Install dependencies

```
npm install
```

2. Deploy Front App

```
npm run dev-front
```

3. Deploy Back App

Launch a mongoDB and then:

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

- Launch Cypress (Functional Tests)

```
npm run dev-front
```

Launch without ui

```
npm run ftest
```

Launch only a spec

```
npm run ftest-spec cypress/integration/[spec-file-name].spec.js
```

Launch with ui

```
npm run ftest-ui
```

- Build

```
npm run build
```

## Functional description

- When the App is launched, real data como from node.js server.

- When Cypress Tests are launched, fake data is used from randomized JSONs.

## Technical Stack

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
