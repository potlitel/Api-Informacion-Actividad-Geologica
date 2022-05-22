import React from 'react';
import { Heading,Divider } from '@chakra-ui/react'
import styles from "./Header.module.css"
import classnames from 'classnames';
class Header extends React.Component{
    render(){
        return <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
          <Heading>Sistema Integral de Control de la Actividad Geológica</Heading>
          </div>
          <Divider orientation='horizontal' />
          {/*<div className={styles.wrapper} >
            <div className={classnames(styles.divider, styles.divtransparent)}></div>
            <div className={classnames(styles.divider, styles.divtransparent, styles.divarrowdown)}></div>
            <div className={classnames(styles.divider, styles.divtransparent, styles.divtabdown)}></div>
            <div className={classnames(styles.divider, styles.divtransparent, styles.divstopper)}></div>
            <div className={classnames(styles.divider, styles.divtransparent, styles.divdot)}></div>
        </div>*/}
        </div>;
    }
}
export default Header;