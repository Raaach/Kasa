import React from 'react';
import Navbar from './components/NavBar.jsx';
import "./App.css"
import Banner from './components/Banner.jsx';
import AppartGrid from './components/AppartGrid.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner/>
        <AppartGrid/>
      </Main>
      <Footer/>
    </div>
  );
}

export default App



