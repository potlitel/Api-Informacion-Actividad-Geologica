import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header"
import { Heading } from '@chakra-ui/react'
import PageNotFound from '../images/error-404-600x248.jpg';
class NotFoundPage extends React.Component{
    render(){
        return <div>
                  {<Header />}  
                  {/*<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Heading>Página no encontrada</Heading>
                  </div>*/}
                  
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '55vh'}}>
                  <img src={PageNotFound} width={755}/>
                </div>
              </div>;
    }
}
export default NotFoundPage;