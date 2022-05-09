import React, { useState, useEffect } from "react";
import MateriasDataService from "../../services/MateriasPrimasServices";
import PaginationControlled from "../PaginationControlled";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import { Box, Heading, Flex, Text, Tag } from '@chakra-ui/react'
import "../../box.css"
import logo2 from "../../images/pngwing.com (3).png"
import escala from "../../images/thermometer-scale_38798.png"


export default function MateriasPrimasList() { 

        const [materias, setMaterias] = useState([]);
        const [page, setPage] = useState(1);
        const [count, setCount] = useState(0);
        const [pageSize, setPageSize] = useState(5);

        const pageSizes = [5, 10, 15, 20];
        
        const [currentTutorial, setCurrentTutorial] = useState(null);
        const [currentIndex, setCurrentIndex] = useState(-1);
        const [searchTitle, setSearchTitle] = useState("");

        useEffect(() => {
            retrieveMaterias();
        }, []);

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
    
    const retrieveMaterias = () => {
        const params = getRequestParams(page, pageSize);
        MateriasDataService.getAll(params)
        .then(response => {
            const { docs, totalPages } = response.data;
            setMaterias(docs);
            setCount(totalPages);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    function handlePageClick({ selected: selectedPage }) {
      console.info(selectedPage + 1);
      setPage(selectedPage + 1);
    }

    const handlePageChange = (event, value) => {
      setPage(8);
      console.info("value");
    };

    const handlePageSizeChange = (event) => {
      setPageSize(event.target.value);
      setPage(1);
    };

    useEffect(retrieveMaterias, [page, pageSize]);
    
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
            
            <Heading>Listado de Materias Primas</Heading>
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
            { !materias.length ===0 ? (<div>Loading ...</div>) : (
              materias.map((materia, index) => (
              <Box key={materia._id}
                bg="gray.100"
                p={4}
                m={4}
                borderRadius="lg"
              >
                <Flex align="center">
                  <img src={escala} width="32" height="32" />
                  <Text fontSize="2x1">
                              Materia Prima {index + 1} : <strong>{materia.nombre}</strong>
                   </Text>
                </Flex>
                      {
                        materia.clasificacion.map((key, i) => (
                            <p key={i}>
                                <Tag p={2} colorScheme="green"><strong>{key.nombre}</strong></Tag>
                            </p>
                        ))
                      }
              </Box>)
            ))}  
          </section>
          
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

        <div class="clear">&nbsp;</div>
        
        <div class="gp33">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
        <div class="gp33">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
        <div class="gp33">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>

        <div class="clear">&nbsp;</div>

        </div>
    )
}