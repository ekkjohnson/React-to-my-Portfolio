import React from "react";
import Carousel from "react-bootstrap/Carousel";
import  Container from "react-bootstrap/Container";
import codeRefractor from '../../../public/Projectimages/codeRefractor.png';
import dayPlanner from '../../../public/Projectimages/dayPlanner.png';
import cocktailMenu from '../../../public/Projectimages/Project1.png';

export default function Work() {

return (
    <div>
    <h1 style={{color:'#0a0908', marginLeft:20 }}>Portfolio</h1>
    <hr></hr>
    <Container>
      <Carousel fade style={{marginTop:20, marginBottom:20}}>
        <Carousel.Item>
          <img
          className="d-block w-100"
          src={dailyPlanner}
          alt="Daily Planner Application"
          />
        <Carousel.Caption style={{background: '#aec3b0'}}>
          <h3>Daily Planner</h3>
          <p>Allows the user to organize their day by entering in tasks that need to be completed at a certain time. background colors indicate hours that have passed, the current hour, and approaching hours. Click <a href="https://nicoled1999.github.io/daily-planner/" id="here">here</a> to visit my website. Click <a href="https://github.com/NicoleD1999/daily-planner" id="here">here</a> to visit the github repo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </div>
);
}