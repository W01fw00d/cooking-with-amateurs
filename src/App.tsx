import React from 'react';
import { hot } from 'react-hot-loader';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import LanguageProvider from './language/languageProvider';

import NotFoundPage from './pages/notFoundPage';
import RecipeDetailPage from './pages/recipeDetail';
import RecipeListPage from './pages/recipeList';

export default hot(module)(() => (
  <LanguageProvider>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/list">
            <RecipeListPage />
          </Route>
          <Route exact path="/detail/:recipeId">
            <RecipeDetailPage />
          </Route>
          <Redirect from="/" exact to="/list" />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  </LanguageProvider>
));
