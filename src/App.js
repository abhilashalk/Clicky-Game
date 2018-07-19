import React from 'react';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageCard from './components/ImageCard/imagecard';


const App = () => (
  <div className="wrapper">
    <Navbar />
    <Jumbotron />
    <Footer />
    <ImageCard />
  </div>
);
export default App;
