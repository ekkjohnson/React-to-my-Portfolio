import React from "react";
import Carousel from "react-bootstrap/Carousel";
import  Container from "react-bootstrap/Container";
import codeRefractor from '../../Projectimages/codeRefractor.png';
import dayPlanner from '../../Projectimages/dayPlanner.png';
import cocktailMenu from '../../Projectimages/Project1.png';

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
          src={dayPlanner}
          alt="Daily Planner Application"
          />
        <Carousel.Caption style={{background: '#aec3b0'}}>
          <h3>Daily Planner</h3>
          <p>Allows the user to organize their day by entering in tasks that need to be completed at a certain time. background colors indicate hours that have passed, the current hour, and approaching hours. Click <a href="https://nicoled1999.github.io/daily-planner/" id="here">here</a> to visit my website. Click <a href="https://ekkjohnson.github.io/day-planner/" id="here">here</a> to visit the github repo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Container>
      <Container>
      <Carousel fade style={{marginTop:20, marginBottom:20}}>
        <Carousel.Item>
          <img
          className="d-block w-100"
          src={codeRefractor}
          alt="Code Refractor Application"
          />
        <Carousel.Caption style={{background: '#aec3b0'}}>
          <h3>Code Refractor Application</h3>
          <p> A webpage for Horriseon Web SErvice Click <a href="https://ekkjohnson.github.io/Code-Refractor/" id="here">here</a> to visit my website. Click <a href="https://github.com/NicoleD1999/daily-planner" id="here">here</a> to visit the github repo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Container>
      <Container>
      <Carousel fade style={{marginTop:20, marginBottom:20}}>
        <Carousel.Item>
          <img
          className="d-block w-100"
          src={cocktailMenu}
          alt="Cocktail Menu Application"
          />
        <Carousel.Caption style={{background: '#aec3b0'}}>
          <h3>Cocktail Menu</h3>
          <p>The Cocktail Menu website is a place to come to search your favorite drinks, get a drink suggestion based on your weather. It even stores your username information. Click <a href="https://nicoled1999.github.io/daily-planner/" id="here">here</a> to visit my website. Click <a href="https://banger484.github.io/cocktail-menu/" id="here">here</a> to visit the github repo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Container>
      </div>
);
}