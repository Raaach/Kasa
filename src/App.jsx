import React from 'react';
import Navbar from './components/NavBar.jsx';
import "./App.css"
import Banner from './components/Banner.jsx';
import AppartGrid from './components/AppartGrid.jsx';
import Main from './components/Main.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner/>
        <AppartGrid/>
      </Main>
    </div>
  );
}

export default App



