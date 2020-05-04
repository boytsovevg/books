import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import Books from './pages/books/containers/Books/Books';
import { appHistory } from './store/root.store';

function App() {
  return (
      <ConnectedRouter history={appHistory}>
        <Switch>
            <Route exact={true} path="/" component={Books}/>
        </Switch>
      </ConnectedRouter>
  );
}

export default App;
