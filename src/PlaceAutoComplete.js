import React from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import "./style.css";
import { useState } from "react";
import { createContext } from 'react';

export let values;
const placeAutocomplete = () => {

  const mapDetailContext = createContext()
  
  const [cordinates, setCordinates] = useState({
    lat: 23.0166287,
    lng: 72.5199797,
  });
  console.log("🚀 ~ file: placeAutocomplete.js:18 ~ placeAutocomplete ~ cordinates", cordinates)
  const [address, setAddress] = useState("");
  const handleChange = async (value) => {
      const result = await geocodeByAddress(value);
     const ll = await getLatLng(result[0]);

      setAddress(value);
      // console.log("🚀 ~ file: index.js:22 ~ handleSelect ~ ll", ll);
    setCordinates(ll);
     console.log("c1", cordinates);
     console.log("l1", ll);
     console.log("c2", cordinates.lat);
     console.log("l2", ll.lat);
     
     {cordinates ? values = cordinates : null}
     console.log("🚀 ~ file: placeAutocomplete.js:32 ~ handleChange ~ values", values)
     
    };
    
    return (
      <>
        {/* <mapDetailContext.Provider value={cordinates}> */}
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleChange}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                      borderStyle: "hidden",
                      color: "black",
                    };
                    return (
                      <div key={suggestion.index}>
                        <div
                          className="suggestionInput"
                          {...getSuggestionItemProps(suggestion, {
                            style,
                          })}
                        >
                          {suggestion.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        {/* </mapDetailContext.Provider> */}
      </>
    );
}



export default placeAutocomplete;