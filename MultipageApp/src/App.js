import React from 'react'
import Header, { Navbar } from './Components/Layouts/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Layouts/Footer/Footer';
import About from './Components/Pages/About/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Components/Pages/Blog/Blog';

function App() {
  return(
    <>
    <Router>
      <Header/>

      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/blog" exact component={Blog} />
      </Switch>
      <Footer/>
      </Router>
    </>
  )
}

export default App;
