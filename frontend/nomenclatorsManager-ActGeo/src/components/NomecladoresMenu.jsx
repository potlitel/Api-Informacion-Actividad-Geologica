import { Link } from "react-router-dom";
export default function GrupoMineralesList() { 
    return (
        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">
                              <Link to={"/escalas"} className="nav-link">
                              Escala
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/estadios"} className="nav-link">
                              Estadío
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/estadoFacturas"} className="nav-link">
                              Estado Factura
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                            <Link to={"/grupoMinerales"} className="nav-link">
                              Grupo Minerales
                            </Link>          
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/localidades"} className="nav-link">
                              Localidad
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/materiasPrimas"} className="nav-link">
                              Materia Prima
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/municipios"} className="nav-link">
                              Municipio
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/niveles"} className="nav-link">
                              Nivel
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/objetivosGeologicos"} className="nav-link">
                              Objetivo Geológico
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/provincias"} className="nav-link">
                              Provincia
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/roles"} className="nav-link">
                              Rol
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/tiposProyectosGeologicos"} className="nav-link">
                              Tipo Proyecto Geológico
                            </Link>      
                            </a>
                        </div>
    )
}