import "./bootstrap/bootstrap.min.css";
import "./bootstrap/bootstrap-icons.css";
import "./bootstrap/bootstrap.bundle.min.js"


import logo from "./images/pngwing.com.png"
import escala from "./images/thermometer-scale_38798.png"
import { Button } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Routes, Route } from "react-router-dom";
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



function App() {

  return (
    <div class="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a href="/" class="navbar-brand">
            <img src={logo} width="70" height="70" alt="CoolBrand"/>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav">
                     
                    <a href="/" class="nav-item nav-link active">Home</a>
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
          <Route path="/" element={<MainView />} />
          <Route path="/grupoMinerales" element={<GrupoMineralesList />} />
          <Route path="/escalas" element={<EscalasList />} />
          <Route path="/estadios" element={<EstadiosList />} />
          <Route path="/estadoFacturas" element={<EstadosFacturasList />} />
          <Route path="/localidades" element={<LocalidadList />} />
          <Route path="/materiasPrimas" element={<MateriasPrimasList />} />
          <Route path="/municipios" element={<MunicipiosList />} />
          <Route path="/niveles" element={<NivelesList />} />
          <Route path="/objetivosGeologicos" element={<ObjetivosGeologicosList />} />
          <Route path="/provincias" element={<ProvinciasList />} />
          <Route path="/roles" element={<RolesList />} />
          <Route path="/tiposProyectosGeologicos" element={<TiposProyectosGeologicosList />} />
        </Routes>
      </div>    
      {<FooterView />}
    </div>
    
    
  )
}

export default App
