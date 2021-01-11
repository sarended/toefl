import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const Home = lazy(() => import())
// const About = lazy(() => import())

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <div>home</div>
          </Route>
          <Route path="/about">
            <div>about</div>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
