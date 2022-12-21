import React, { useRef, useState, useCallback } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
// import PlacesAutocomplete from './PlaceAutoComplete';
import mapDetailContext from './PlaceAutoComplete'




function Map() {

  const context = useContext(mapDetailContext);




  const [center, setCenter] = useState({
    lat: 23.0166287,
    lng: 72.5199797,
  });

  const refMap = useRef(null);


  const handleBoundsChanged = () => {
    const mapCenter = refMap.current.getCenter(); //get map center
    console.log("lat", mapCenter.lat(), "lng", mapCenter.lng() );
    setCenter(mapCenter)

  };
  return (
    <>
      <GoogleMap
        ref={refMap}
        defaultZoom={15}
        defaultCenter={{ lat: 23.0166287, lng: 72.5199797 }}
        onBoundsChanged={handleBoundsChanged}
      >
        <Marker position={center} />
      </GoogleMap>
      
    </>
  );

}

export default withScriptjs(withGoogleMap(Map));
