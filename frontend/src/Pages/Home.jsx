import React from 'react';
import NavBar from '../Components/NavBar';
import homeimg from '../Media/homepage.png';


function Home() {
  return (
    <div className='Home-page'>
      <NavBar />
      <div className='Home-container'>
        <section className='home-text'>
          <span className='text1'>"Discover Personalized Mental Health Care at Your Doorstep with MindMender".</span> 
          
        </section>
        <section className="home-image">
          <img src={homeimg} alt="home-image" />
        </section>
      </div>
    </div>
  );
}

export default Home;
