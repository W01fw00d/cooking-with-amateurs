import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const LanguageProvider = lazy(() => import('./language/languageProvider'));

const NotFoundPage = lazy(() => import('./pages/notFound'));
const AboutPage = lazy(() => import('./pages/about'));
const DetailPage = lazy(() => import('./pages/recipeDetail'));
const ListPage = lazy(() => import('./pages/recipeList'));

export default hot(module)(() => (
  <Suspense fallback={<div>Loading...</div>}>
    <LanguageProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/list">
              <ListPage />
            </Route>
            <Route exact path="/detail/:recipeId">
              <DetailPage />
            </Route>
            <Redirect from="/" exact to="/list" />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    </LanguageProvider>
  </Suspense>
));
