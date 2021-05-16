import React from 'react';
import { Container } from 'react-bootstrap';
import Styles from './App.module.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreens from './screens/HomeScreens';

function App() {
  return (
    <>
      <Header/>      
      <section className={Styles.section}>
        <Sidebar/>

        <Container fluid className={Styles.container}>

          <HomeScreens/>
          

        </Container>
        
      </section>
    </>
  );
}

export default App;
