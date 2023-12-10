import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map: React.FC = () => {
    const coordinates = { lat: 0, lng: 0 };

    return (
        <div className="w-2/4 h-screen ">
            <div className="h-3/4">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAYRP6bHQnMAj7qihTLPTgimj0ivYhZSMs' }}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={'' as any}
                    onChange={'' as any}
                    onChildClick={'' as any}
                >
                    {/* Twoje komponenty mapy tutaj */}
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Map;
