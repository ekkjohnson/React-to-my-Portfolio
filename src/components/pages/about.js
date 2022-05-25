import React from 'react';
import Resume from './Resume'
import portfolioImage from '../../Projectimages/Profile Photo.JPG'
import Button from 'react-bootstrap/Button';
import '../../styles.css'

const styles = {
    image: {
        width: 400,
        height: 400,
        borderRadius: 200,
        position: 'relative',
        top: 5,
        marginRight: 20,
        float: 'right',
    },
    paragraph: {
        marginRight: 500,
        marginLeft: 40,
        fontSize: 25,
    },
    head: {
        marginLeft: 20,
    },
}


export default function About() {

  return (
    <div style={{color: '#0a0908', marginLeft:10}}>
      <h1 style={{marginLeft: 10}}>About Me</h1>
      <img src={{portfolioImage}} alt='portfolio'/>
      <div>
          <h1>Elizabeth Kissner Johnson</h1>
          <h4>Jr. Web Developer</h4>
     </div>
     <p>
     Thank you for visitng my profile. My name is Elizabeth and I am a Junior Web Deveoper based in Minneapolis. I have a B.S. in Biology from Univsersity of Wisconsin-Eau Claire. I am in a Coding and Programming Bootcamp
              at the University of Minnesota with an expected graduation date of June 2022. If you would like to get in touch with me please feel free to send me an e-mail. Thank you for your interest and I hope to be in touch with you soon.</p>
     <Button variant="outline-dark" style={{marginLeft: 40}}>✉ ekkjohnson@gmail.com</Button>
     </div>
   );
 }