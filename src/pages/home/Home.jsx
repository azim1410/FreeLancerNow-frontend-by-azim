import React from 'react'
import Featured from '../../components/navbar/featured/Featured'
// import Slides from '../../components/navbar/Slides/Slides'
import { cards, projects } from '../../data';
import Slide from '../../components/Slide/Slide';
import CatCard from '../../components/catCard/CatCard';
import ProjCard from '../../components/ProjCard/ProjCard';
import './Home.scss';
const Home = () => {
  return (
    <div>
      <Featured />
      <Slide slidesToShow={5} arrowsScroll={3}>
         {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      
    </div>
  );
}

export default Home