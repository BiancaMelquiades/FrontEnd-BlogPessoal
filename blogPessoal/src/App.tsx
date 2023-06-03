//import React from "react";
import { BrowserRouter as Router, Route, Routes} from '../node_modules/react-router-dom/dist/index';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import store from './store/store';
import { Provider } from 'react-redux/es/exports';
import Perfil from './paginas/perfil/Perfil';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Sidebar from './componentes/estaticos/sidebar/Sidebar'
import MinhasPostagens from './components/postagens/meusposts/MinhasPostagens';
import Sobrenos from './paginas/sobrenos/Sobrenos';
//import Parceiros from './paginas/parceiros/Parceiros';

function App() {
  return (
    <Provider store={store}>
    <ToastContainer/>
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <div className="apptsx" style={{ minHeight: '100vh', width: 'calc(100vw-200px)', marginLeft: 'auto' }}>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/meusPosts' element={<MinhasPostagens />} />
          <Route path='/sobrenos' element={<Sobrenos />} />
          {/* <Route path='/parceiros' element={<Parceiros />} /> */}

        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;