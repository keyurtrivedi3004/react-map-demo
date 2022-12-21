import React from 'react'
import WrappedMap from "./Map";


const Map1 = () => {
  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCCxE_Yu71rzjVruopxxAWNdl30fFE_Uz0`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `220px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Map1