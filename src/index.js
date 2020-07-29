import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import cadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route path='/cadastro/video' component={cadastroVideo} />
      <Route path='/' component={App} exact />
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

