import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Styles from './App.module.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreens from './screens/HomeScreens';
import LoginScreen from './screens/login-screen/LoginScreen';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';


const Layout = ({children}) => {
  const [sidebar, toggleSidebar] = useState(false) 
  
  const handleToggleSidebar = () => {
    toggleSidebar(prvValue => !prvValue)
  }

  return(
    <>
      <Header handleOnclick={handleToggleSidebar}/>

      <section className={Styles.section}>
        <Sidebar sidebar={sidebar} handleOnclick={handleToggleSidebar}/>
       
        <Container fluid className={Styles.container}>
          {children}
        </Container>
      </section>
    </>
  )
}


const App = () => {

  const {accessToken, loading} = useSelector(state=>state.auth);

  const history = useHistory();

  useEffect(() => {

    if(!loading && !accessToken){
      history.push('/auth')
    }

  }, [accessToken, loading, history])

  return (
      <Switch>
        <Route path='/' exact>
          <Layout>
            <HomeScreens/>
          </Layout>
        </Route>

        <Route path='/auth'>
          <LoginScreen/>
        </Route>

        <Route path='/search'>
          <Layout>
            <h1>Search</h1>
          </Layout>
        </Route>

        <Route>
          <Redirect to="/"/>
        </Route>
      </Switch>
  );
}

export default App;
