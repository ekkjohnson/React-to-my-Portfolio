import React from 'react';
import Download from '../DownloadButton'

import '../../styles.css'
export default function Resume() {

    return (
  
      <div style={{color: '#0a0908', marginLeft: 25}}>
        <h1 style={{fontFamily: 'Merriweather serif', fontSize: 45, marginTop: 10}}>Resume</h1>
        <hr></hr>
        <h5>Click Arrow to Download Resume <Download/></h5>
      <div style={{display: 'flex', flexWrap: 'wrap'}}></div>
        <iframe style={{height:620, width:850, marginLeft: 15}}src="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:7702f513-af53-4bc2-8188-a3cd4ede8924" title="Resume"></iframe>
      </div>
    );
  }