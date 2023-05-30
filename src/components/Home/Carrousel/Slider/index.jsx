// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import React from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import VideoCard from '../VideoCard';
import { colorFrontend, fuentePrincipal, colorGray } from "../../../UI/variables";

const MultipleItems = ({categoria}) =>  { 
  const {id, titulo, descripcion, videos} = categoria;

// const StyleH2 = styled.h2`
//     display: inline-block;
//     background-color: ${colorFrontend};
//     margin: 1rem 3rem;
//     color: ${colorGray};
//     font-family: ${fuentePrincipal};
//     font-size: 4rem;
//     font-size: 400;
// `

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
        
        <Slider {...settings} key={id}>
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          {videos.map((video,index) => <VideoCard key={index} video={video}/>)}
        </Slider>
      
    );
  }

export default MultipleItems