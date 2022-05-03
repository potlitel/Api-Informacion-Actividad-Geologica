import React, { useState, useEffect } from "react";
import TutorialDataService from "../../services/EscalasServices";
import { Link } from "react-router-dom";
import { Box, Heading } from '@chakra-ui/react'

export default function EscalasList() { 

        const [tutorials, setTutorials] = useState([]);
        const [currentTutorial, setCurrentTutorial] = useState(null);
        const [currentIndex, setCurrentIndex] = useState(-1);
        const [searchTitle, setSearchTitle] = useState("");

        useEffect(() => {
            retrieveTutorials();
        }, []);

    const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };
    
    return (
     <div class="main">
        <div class="clear"></div>

        <div class="g12">
            
            <Heading>Listado de Escalas</Heading>

            <ul className="list-group">
            {tutorials.map((tutorial, index) => (
                <li className={ "list-group-item " + (index === currentIndex ? "active" : "") }>
                    {tutorial.valor_escala}
                </li>
                ))}
            </ul>
        </div>
        </div>
    )
}