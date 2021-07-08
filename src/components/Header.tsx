import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header: React.FC<any> = () => {
  return (
    <div className={styles.head}>
      <div className={styles.head1}>
        <Link to="/" >Home</Link>
      </div>
      <div className={styles.head2}>
        <Link  to="/react">React</Link>
        <Link  to="/javascript">Javascript</Link>
        <Link  to="/html">Html</Link>
        <Link  to="/css">Css</Link>
        <Link  to="/angular">Angular</Link>

      </div>
      <div className={styles.head3}>
        <MenuIcon className={styles.menu} />
        <div className={styles.down}>

          <Link to="/react">React</Link>
          <Link to="/javascript">Javascript</Link>
          <Link to="/html">Html</Link>
          <Link to="/css">Css</Link>
          <Link to="/angular">Angular</Link>

        </div>

      </div>
    </div>


  )
}

export default Header;

