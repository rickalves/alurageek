import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import NotFound from './views/404';
import App from './views/App';
import Home from './views/Home';
import Login from './views/Login';
import Produto from './views/Produtos/Produto';
import Produtos from './views/Produtos/index';
import ProdutosTodos from './views/Produtos/Produtos';
import Novo from './views/Produtos/Novo';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path="*" element={<NotFound type='pages' />} />
          <Route path="produtos" element={<Produtos />}>
            <Route index element={<ProdutosTodos />} />
            <Route path=":productId" element={<Produto />} />
            <Route path="novo" element={<Novo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


