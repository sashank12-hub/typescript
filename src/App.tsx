import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import styles from './App.module.css';
import{Link,BrowserRouter,Route,Switch}from 'react-router-dom'
import Homepage from './components/Homepage';
import Reactjs from './components/React';
import Javascript from './components/Javascript';
import HTML from './components/Html';
import Css from './components/Css';
import Angular from './components/Angular';
import Footer from './components/Footer';
//https://github.com/harblaith7/React-With-TypeScript-Crash-Course/blob/main/src/components/AddToList.tsx
const App:React.FC<any> = () => {
  // let skills=['react','javascript','html','css','angular']
//   const router= skills.map(item=>{
//     return (
// <Route exact path={item}component={}/>

//     )
//   })
// const handlehover:React.MouseEventHandler<HTMLDivElement>=():void=>{
// document.getElementById('header')!.style.display="block"
// }
  return (
    <div className={styles.app}>
      
      <BrowserRouter>
      <div className={styles.header} id="header">
      <Header/>
      </div>
      
      <Switch>
     
      <Route exact path='/'component={Homepage}/>
        <Route exact path='/react'component={Reactjs}/>
        <Route exact path='/javascript'component={Javascript}/>
        <Route exact path='/html'component={HTML}/>
        <Route exact path='/css'component={Css}/>
        <Route exact path='/angular'component={Angular}/>

      </Switch>
      <div className={styles.footer}>
      <Footer/>
      </div>
     
      </BrowserRouter>
    </div>
  )
}

export default App
