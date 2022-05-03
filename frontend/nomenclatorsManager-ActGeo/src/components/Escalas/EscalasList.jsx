import React, { useState, useEffect } from "react";
import TutorialDataService from "../../services/EscalasServices";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Text, Spacer } from '@chakra-ui/react'
import "../../box.css"
import logo2 from "../../images/pngwing.com (3).png"
import escala from "../../images/thermometer-scale_38798.png"

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

        <div class="g8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis lacus in metus tempor fringilla id eu nisi.
          Quisque lectus purus, pellentesque et vestibulum sit amet, sollicitudin nec nisi. Integer at risus dui, et sodales nisi. Nulla
          iaculis imperdiet magna et malesuada. Morbi accumsan lectus et velit porta vel aliquam dolor egestas. Curabitur tincidunt, sapien a
          elementum aliquam, metus arcu bibendum justo, at blandit tellus sapien vel turpis. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Phasellus suscipit orci eget mi volutpat euismod. Suspendisse volutpat vestibulum magna
          et lobortis.Curabitur tincidunt, sapien a
          elementum aliquam, metus arcu bibendum justo, at blandit tellus sapien vel turpis. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Phasellus suscipit orci eget mi volutpat euismod. Suspendisse volutpat vestibulum magna
          et lobortis.
        </div>
        <div class="g4">
          <Box bg='tomato' borderWidth='1px' borderRadius='lg' overflow='hidden' w='100%' p={6} color='white'>
            <img src={logo2} width="300" height="300" alt="CoolBrand"/>
          </Box>
        </div>
        
        <div class="gp83">
            
            <Heading>Listado de Escalas</Heading>
          <section>
            {tutorials.map((tuto,index) => (
              <Box key={tuto._id}
                bg="gray.100"
                p={4}
                m={4}
                borderRadius="lg"
              >
                <Flex align="center">
                  <img src={escala} width="32" height="32" />
                  <Text fontSize="2x1">
                      Escala {index + 1} : <strong>{tuto.valor_escala}</strong>
                  </Text>
                </Flex>
              </Box>
            ))}  
          </section>

        </div>

        <div class="clear">&nbsp;</div>
        
        <div class="gp33">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nulla eu justo porttitor molestie eu sit amet arcu. Sed feugiat molestie ipsum et faucibus.</div>
        <div class="gp33">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nulla eu justo porttitor molestie eu sit amet arcu. Sed feugiat molestie ipsum et faucibus.</div>
        <div class="gp33">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nulla eu justo porttitor molestie eu sit amet arcu. Sed feugiat molestie ipsum et faucibus.</div>

        <div class="clear">&nbsp;</div>

        </div>
    )
}