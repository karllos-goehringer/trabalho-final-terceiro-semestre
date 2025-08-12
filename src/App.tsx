import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PaginaTabelaItens from './paginas/lista-de-itens/lista-de-itens';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './paginas/index/Index';
import ControladorRepositorio from './classes/ControladorRepositorio';
import PaginaItem from './paginas/pagina-item/pagina-item';
import PaginaCampeoes from './paginas/campeoes/campeoes';
import PaginaCampeao from './paginas/pagina-campeao/pagina-campeao';
import DefaultPage from './paginas/default/default';
import PaginaPesquisa from './paginas/pagina-pesquisa/Pagina-pesquisa';
import PaginaRuna from './paginas/pagina-runa/Pagina-runa';
import ListaRunas from './paginas/runas/lista-runas';
import PaginaFeiticos from './paginas/feiticos/pagina-feiticos';
import RepositorioInstanciados from './classes/RepositorioIntanciados';
import PaginaFeitico from './paginas/feitico/Pagina-feitico'
function App() {
  useEffect(() => {
      ControladorRepositorio.inicializarRepositorios().then(() =>
      console.log(RepositorioInstanciados.getFeiticos()));
    }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='pagina-item/:id' element={<PaginaItem/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/lista-de-itens" element={<PaginaTabelaItens />} />
        <Route path="/campeoes" element={<PaginaCampeoes/>}/>
        <Route path="/pagina-campeao/:id" element={<PaginaCampeao/>}/>
        <Route path="/pagina-pesquisa/:id" element={<PaginaPesquisa/>}/>
        <Route path="/pagina-runa/:id" element={<PaginaRuna/>}/>
        <Route path="/pagina-runa" element={<ListaRunas/>}/>
        <Route path="/pagina-feiticos" element={<PaginaFeiticos/>}/>
        <Route path="/pagina-feiticos/:id" element={<PaginaFeitico/>}/>

        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
