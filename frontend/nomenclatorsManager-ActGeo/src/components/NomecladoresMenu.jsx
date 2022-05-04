import { Link } from "react-router-dom";
import { Flex, Text, Spacer } from '@chakra-ui/react'
import escala from "../images/thermometer-scale_38798.png"
import estadio from "../images/estadío.png"
import grupoMinerales from "../images/mineral-heart_38203.png"

export default function GrupoMineralesList() { 
    return (
        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">
                              <Link to={"/escalas"} className="nav-link">
                                 <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Escala
                                  </Text>
                                </Flex>                                       
                              </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/estadios"} className="nav-link">
                              <Flex align="center">
                                  <img src={estadio} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Estadío
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/estadoFacturas"} className="nav-link">
                              <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Estado Factura
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                            <Link to={"/grupoMinerales"} className="nav-link">
                              <Flex align="center">
                                  <img src={grupoMinerales} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Grupo de Minerales
                                  </Text>
                                </Flex>
                            </Link>          
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/localidades"} className="nav-link">
                              <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Localidad
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/materiasPrimas"} className="nav-link">
                              <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Materia Prima
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/municipios"} className="nav-link">
                              <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Municipio
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/niveles"} className="nav-link">
                              <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Nivel
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/objetivosGeologicos"} className="nav-link">
                              <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Objetivo Geológico
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/provincias"} className="nav-link">
                              <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Provincia
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/roles"} className="nav-link">
                              <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Rol
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                            <a href="#" class="dropdown-item">
                              <Link to={"/tiposProyectosGeologicos"} className="nav-link">
                              <Flex align="center">
                                  <img src={escala} width="32" height="32" />
                                  <Text fontSize="2x1">
                                      Tipo de Proyecto Geológico
                                  </Text>
                                </Flex>
                            </Link>      
                            </a>
                        </div>
    )
}