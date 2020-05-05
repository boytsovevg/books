import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { appHistory } from './store/root.store';

import Books from './pages/books/containers/Books/Books';
import BookEdit from './pages/books/containers/BookEdit/BookEdit';
import BookCreate from './pages/books/containers/BookCreate/BookCreate';

function App() {
  return (
      <ConnectedRouter history={appHistory}>
        <Switch>
            <Route exact={true} path="/" component={Books}/>
            <Route exact={true} path="/books" component={Books}/>
            <Route path="/books/create" component={BookCreate}/>
            <Route path="/books/:id/edit" component={BookEdit}/>
        </Switch>
      </ConnectedRouter>
  );
}

export default App;
