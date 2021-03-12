import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import cadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro';
import page404 from './pages/404page'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route path='/cadastro/video' component={cadastroVideo} />
      <Route path='/' component={App} exact />
      <Route component={page404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

