import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import cadastroVideo from './pages/cadastro/video';
import cadastroCategoria from './pages/cadastro';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/categoria' component={cadastroCategoria} />
      <Route path='/cadastro/video' component={cadastroVideo} />
      <Route path='/' component={App} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

