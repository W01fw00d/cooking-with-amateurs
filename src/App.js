import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import RecipeListPage from './pages/recipeListPage';
import RecipeDetailPage from './pages/recipeDetailPage';
import NotFoundPage from './pages/notFoundPage';

const App = () => {
  return (
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
  );
};

export default hot(module)(App);
