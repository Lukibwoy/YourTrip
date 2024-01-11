import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map: React.FC = ({setCoordinates, setLimit, coordinates}) => {
    // const coordinates = { lat: 0, lng: 0 };

    return (
        <div className="w-full text-center md:w-2/4 h-screen mt-10 md:mt-0">
            <div className="h-3/4">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAYRP6bHQnMAj7qihTLPTgimj0ivYhZSMs' }}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={'' as any}
                    onChange={(e)=>{
                        console.log(e)
                        setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    }}
                    onChildClick={'' as any}
                >

                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Map;
