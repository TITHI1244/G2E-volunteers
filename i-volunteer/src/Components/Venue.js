// import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
// import React, { useState } from "react";

// export function Venue(props) {  
//     const [infoWindow, setInfoWindow] = useState(false);
//     const [activeMarker, setActiveMarker] = useState({});
//     const [selectedPlace, setSelectedPlace] = useState({});
//     const onMarkerClick = (props, marker, e) => {
//         setSelectedPlace(props);
//         setActiveMarker(marker);
//         setInfoWindow(true);
//     }
//     const onClose = () => {
//         if(infoWindow) {
//             setInfoWindow(false);
//             setActiveMarker(null);
//         }
//     }
//     return (
//         <>
//             <div className="map">
//                 <Map
//                     google={props.google}
//                     initialCenter={{
//                     lat: 55.63840120183359, 
//                     lng: 12.577560455511142,
//                     }}
//                     zoom={15}
//                 >            
//             <Marker
//                 onClick={onMarkerClick}
//                 name={'Bella Centre'}
//             />
//             <InfoWindow
//                 marker={activeMarker}
//                 visible={infoWindow}
//                 onClose={onClose}
//             >
//                 <div>
//             <h4>{selectedPlace.name}</h4>
//           </div>
//             </InfoWindow>
//             </Map>
//             </div>
//         </>
//     );
// }

// const GoogleMap = GoogleApiWrapper({
//   apiKey: 'AIzaSyDidYKzPEE8XNh8brfVTiC0j7UEW6RBR8Q',
// })(Venue);

// export default GoogleMap;