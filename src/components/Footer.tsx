import React from 'react'
import styles from './footer.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href="/hello" target="_blank">hh</a>
            
        <h3><span> designedby</span>
           </h3>


        </div>
    )
}

export default Footer
