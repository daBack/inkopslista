import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { ITheme } from 'types';

import { RouterHome } from 'routes';

const ComponentRouter = ({ theme }: { theme: ITheme }): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RouterHome />
        </Route>
        <Route path="/recipe">
          <div className='home'>Recept</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default ComponentRouter;
