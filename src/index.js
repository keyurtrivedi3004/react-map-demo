import React, { Component } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import Map1 from './map1';
import PlaceAutoComplete from './PlaceAutoComplete'


function App() {
  
const[newval,setNewVal]=useState()
  return (
    <>
      <PlaceAutoComplete />
      <Map1/>
      
      
    </>
  );

}

render(<App />, document.getElementById('root'));
