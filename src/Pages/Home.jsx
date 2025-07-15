import React from 'react'
import Carousel from '../Components/Carousel'
import About from './About';
import Trendingproducts from '../Components/Trendingproducts';

function Home() {
  return (
    <div>
      <Carousel />
      <About/>
      <Trendingproducts/>

    </div>

  )
}

export default Home;