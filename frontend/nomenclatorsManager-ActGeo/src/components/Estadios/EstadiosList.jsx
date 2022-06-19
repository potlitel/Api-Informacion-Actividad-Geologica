import React, { useState, useEffect } from "react";
import EstadioDataService from "../../services/EstadiosServices";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Text, Spacer } from "@chakra-ui/react";
import "../../box.css";
import logo2 from "../../images/pngwing.com (3).png";
import estadioLogo from "../../images/estadío.png";
import Header from "../Header";
import TestimonialCards from "../TestimonialCards";
export default function EstadiosList() {
  const [estadios, setEstadios] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveEstadios();
  }, []);

  const retrieveEstadios = () => {
    EstadioDataService.getAll()
      .then((response) => {
        setEstadios(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div class="main">
      {<Header />}
      <div class="clear"></div>

      <div class="g8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
        lacus in metus tempor fringilla id eu nisi. Quisque lectus purus,
        pellentesque et vestibulum sit amet, sollicitudin nec nisi. Integer at
        risus dui, et sodales nisi. Nulla iaculis imperdiet magna et malesuada.
        Morbi accumsan lectus et velit porta vel aliquam dolor egestas.
        Curabitur tincidunt, sapien a elementum aliquam, metus arcu bibendum
        justo, at blandit tellus sapien vel turpis. Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Phasellus
        suscipit orci eget mi volutpat euismod. Suspendisse volutpat vestibulum
        magna et lobortis.Curabitur tincidunt, sapien a elementum aliquam, metus
        arcu bibendum justo, at blandit tellus sapien vel turpis. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Phasellus suscipit orci eget mi volutpat euismod. Suspendisse
        volutpat vestibulum magna et lobortis.
      </div>
      <div class="g4">
        <Box
          bg="tomato"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          w="100%"
          p={6}
          color="white"
        >
          <img src={logo2} width="300" height="300" alt="CoolBrand" />
        </Box>
      </div>

      <div class="gp83">
        <Heading
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Listado de Estadíos
        </Heading>
        <section>
          {estadios.map((estadio, index) => (
            <Box key={estadio._id} bg="gray.100" p={4} m={4} borderRadius="lg">
              <Flex align="center">
                <img src={estadioLogo} width="32" height="32" />
                <Text fontSize="2x1">
                  Estadío {index + 1} : <strong>{estadio.valor_estadio}</strong>
                </Text>
              </Flex>
            </Box>
          ))}
        </section>
      </div>

      <div class="clear">&nbsp;</div>

      <TestimonialCards/>

      <div class="clear">&nbsp;</div>
    </div>
  );
}
