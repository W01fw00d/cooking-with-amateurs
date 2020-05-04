import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { LanguageProvider } from './language';
import LanguageSelector from './languageSelector';
import NotFoundPage from './pages/notFoundPage';
import RecipeDetailPage from './pages/recipeDetailPage';
import RecipeListPage from './pages/recipeListPage';

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <header className="App-header">
          <LanguageSelector />
        </header>
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
  );
};

export default hot(module)(App);
