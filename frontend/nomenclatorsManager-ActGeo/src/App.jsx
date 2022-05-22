import "./bootstrap/bootstrap.min.css";
import "./bootstrap/bootstrap-icons.css";
import "./bootstrap/bootstrap.bundle.min.js"


import logo from "./images/pngwing.com.png"
import escala from "./images/thermometer-scale_38798.png"
import { Button } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Routes, Route, Link} from "react-router-dom";
import GrupoMineralesList from "./components/GrupoMineralesList";
import MainView from "./components/mainView"
import NomencladoresMenu from "./components/NomecladoresMenu"
import EscalasList from "./components/Escalas/EscalasList"
import EstadiosList from "./components/Estadios/EstadiosList"
import EstadosFacturasList from "./components/EstadoFactura/EstadoFactura"
import LocalidadList from "./components/Localidad/LocalidadList"
import MateriasPrimasList from "./components/MateriaPrima/MateriaPrimaList"
import MunicipiosList from "./components/Municipios/MunicipiosList"
import NivelesList from "./components/Niveles/NivelesList"
import ObjetivosGeologicosList from "./components/ObjetivoGeologico/ObjetivosGeologicosList";
import ProvinciasList from "./components/Provincia/ProvinciasList"
import RolesList from "./components/Rol/RolesList"
import TiposProyectosGeologicosList from "./components/TipoProyectoGeologico/TiposProyectosGeologicosList"
import FooterView from "./components/Footer"
import NotFoundPage from './components/NotFound';



function App() {

  return (
    <div class="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link to="/" class="navbar-brand">
            <img src={logo} width="70" height="70" alt="CoolBrand"/>
            </Link>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav">
                     
                    <Link to="/" class="nav-item nav-link active">Home</Link>
                    <a href="#" class="nav-item nav-link">Profile</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nomencladores</a>
                        {<NomencladoresMenu />}
                    </div>
                </div>
                <form class="d-flex">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search"/>
                        <Button leftIcon={<Search2Icon />} colorScheme='teal' variant='solid'/>
                    </div>
                </form>
            </div>
        </div>
      </nav>
      
      <div className="container mt-3">
        <Routes>

          <Route exact path="/" element={<MainView />} />
          <Route exact path="/grupoMinerales" element={<GrupoMineralesList />} />
          <Route exact path="/escalas" element={<EscalasList />} />
          <Route exact path="/estadios" element={<EstadiosList />} />
          <Route exact path="/estadoFacturas" element={<EstadosFacturasList />} />
          <Route exact path="/localidades" element={<LocalidadList />} />
          <Route exact path="/materiasPrimas" element={<MateriasPrimasList />} />
          <Route exact path="/municipios" element={<MunicipiosList />} />
          <Route exact path="/niveles" element={<NivelesList />} />
          <Route exact path="/objetivosGeologicos" element={<ObjetivosGeologicosList />} />
          <Route exact path="/provincias" element={<ProvinciasList />} />
          <Route exact path="/roles" element={<RolesList />} />
          <Route exact path="/tiposProyectosGeologicos" element={<TiposProyectosGeologicosList />} />
          <Route path="" element={<NotFoundPage />} /> // empty ""
          <Route path="*" element={<NotFoundPage />} /> // star *
          <Route element={<NotFoundPage />} /> // without path
        </Routes>
      </div>    
      {<FooterView />}
    </div>
    
    
  )
}

export default App
