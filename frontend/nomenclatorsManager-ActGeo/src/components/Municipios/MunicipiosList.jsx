import React, { useState, useEffect } from "react";
import MunicipiosDataService from "../../services/MunicipiosServices";
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Text, Spacer } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import "../../box.css";
import logo2 from "../../images/pngwing.com (3).png";
import escala from "../../images/thermometer-scale_38798.png";
import Header from "../Header";
import TestimonialCards from "../TestimonialCards";
export default function MunicipiosList() {
  const [municipios, setMunicipios] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const pageSizes = [5, 10, 15, 20];

  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const getRequestParams = (page, pageSize) => {
    let params = {};
    if (page) {
      params["page"] = page - 1;
    }
    if (pageSize) {
      params["size"] = pageSize;
    }
    return params;
  };

  const retrieveMunicipios = () => {
    const params = getRequestParams(page, pageSize);
    MunicipiosDataService.getAll(params)
      .then((response) => {
        const { docs, totalPages } = response.data;
        setMunicipios(docs);
        setCount(totalPages);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function handlePageClick({ selected: selectedPage }) {
    console.info(selectedPage + 1);
    setPage(selectedPage + 1);
  }

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  useEffect(retrieveMunicipios, [page, pageSize]);

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
          Listado de Municipios
        </Heading>
        <Flex>
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </Flex>
        <section>
          {!municipios.length === 0 ? (
            <div>Loading ...</div>
          ) : (
            municipios.map((municipio, index) => (
              <Box
                key={municipio._id}
                bg="gray.100"
                p={4}
                m={4}
                borderRadius="lg"
              >
                <Flex align="center">
                  <img src={escala} width="32" height="32" />
                  <Text fontSize="2x1">
                    Municipio <strong>{municipio.nombre}</strong>
                    {municipio.provincia.map((key, i) => (
                      <p key={i}>
                        Provincia que pertenece : <strong>{key.nombre}</strong>
                      </p>
                    ))}
                  </Text>
                </Flex>
              </Box>
            ))
          )}
        </section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={pageSize}
            pageCount={count}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>

      <div class="clear">&nbsp;</div>

      <TestimonialCards/>

      <div class="clear">&nbsp;</div>
    </div>
  );
}
