import "./bootstrap/bootstrap.min.css";
import "./bootstrap/bootstrap-icons.css";
import "./bootstrap/bootstrap.bundle.min.js"

import logo from "./images/geological-research.jpg"
import { Button } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { Routes, Route } from "react-router-dom";
import GrupoMineralesList from "./components/GrupoMineralesList";
import MainView from "./components/mainView"
import EscalasList from "./components/Escalas/EscalasList"
import NomencladoresMenu from "./components/NomecladoresMenu"


function App() {

  return (
    <div class="m-3">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">
            <img src={logo} width="50" height="50" alt="CoolBrand"/>
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
        </Routes>
      </div>     
</div>

  )
}

export default App
