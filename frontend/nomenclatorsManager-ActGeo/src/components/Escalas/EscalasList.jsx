import React, { useState, useEffect } from "react";
import TutorialDataService from "../../services/EscalasServices";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Text, Spacer } from "@chakra-ui/react";
import "../../box.css";
import logo2 from "../../images/pngwing.com (3).png";
import escala from "../../images/thermometer-scale_38798.png";
import Header from "../Header";
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
      .then((response) => {
        setTutorials(response.data);
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
          Listado de Escalas
        </Heading>
        <section>
          {!tutorials.length === 0 ? (
            <div>Loading ...</div>
          ) : (
            tutorials.map((tuto, index) => (
              <Box key={tuto._id} bg="gray.100" p={4} m={4} borderRadius="lg">
                <Flex align="center">
                  <img src={escala} width="32" height="32" />
                  <Text fontSize="2x1">
                    Escala {index + 1} : <strong>{tuto.valor_escala}</strong>
                  </Text>
                </Flex>
              </Box>
            ))
          )}
        </section>
      </div>

      <div class="clear">&nbsp;</div>

      <div class="gp33">
        <div class="mx-6">
          <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class="flex justify-center md:justify-end -mt-16">
              <img
                class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
              <p class="mt-2 text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div class="flex justify-end mt-4">
              <a href="#" class="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="gp33">
        <div class="mx-6">
          <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class="flex justify-center md:justify-end -mt-16">
              <img
                class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
              <p class="mt-2 text-gray-600">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
            </div>
            <div class="flex justify-end mt-4">
              <a href="#" class="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="gp33">
        <div class="mx-6">
          <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div class="flex justify-center md:justify-end -mt-16">
              <img
                class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
              <p class="mt-2 text-gray-600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
            <div class="flex justify-end mt-4">
              <a href="#" class="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="clear">&nbsp;</div>
    </div>
  );
}
