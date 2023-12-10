import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import Map from './Map';


const GoogleSearch: React.FC = () => {
  return (
    <div className="min-h-screen h-3/4 w-screen flex justify-center mt-12 ">
      <div className="searchArea h-1/3 mb-30 flex justify-around items-center w-2/6 mt-30 flex-col">
        <p className="text-center text-2xl font-semibold mb-4 md:mb-0 md:mr-4">Explore New Places</p>
        {/* <Autocomplete> */}
        <input
          className="border border-gray-300 rounded px-4 py-2 pr-20 mt-10"
          type="text"
          placeholder="Search.."
        />
        {/* </Autocomplete> */}
      </div>
      <Map />
    </div>
  );
};

export default GoogleSearch;
