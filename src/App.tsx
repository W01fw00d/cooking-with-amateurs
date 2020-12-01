import React from 'react';
import { hot } from 'react-hot-loader';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import LanguageProvider from './language/languageProvider';

import NotFoundPage from './pages/notFound';
import AboutPage from './pages/about';
import DetailPage from './pages/recipeDetail';
import ListPage from './pages/recipeList';

export default hot(module)(() => (
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
));
