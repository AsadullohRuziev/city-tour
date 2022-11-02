import React from 'react';
import Attraction from './Attraction';
import { Dallas } from '../../data/attractions';

const DallasTX = (props) => {
  let attraction = Dallas.map((attraction) => {
    return <Attraction title={attraction.title}
                   desc={attraction.description}
                   img={attraction.img_src}
                   key={attraction.id} />
  }); 
  return (
    <div>
      <ul>
        {attraction}    
      </ul>
    </div>
  );
}

export default DallasTX;