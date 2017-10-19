import React, { Component } from 'react';
// import { GoogleMap, Marker } from "react-google-maps"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = compose(

    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
        {props.isMarkerShown && <Marker position={{ lat: -34.340, lng: 150.694 }} onClick={props.onMarkerClick} />}
    </GoogleMap>
)
//     /*<MyMapComponent isMarkerShown googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
//     loadingElement={<div style={{ height: `100%` }} />}
//     containerElement={<div style={{ height: `400px` }} />}
//     mapElement={<div style={{ height: `100%` }} />}
//     />// Map with a Marker
// // <MyMapComponent isMarkerShown={false} />// Just only Ma
//   */
// //



export default class MyFancyComponent extends React.PureComponent {

    state = {
        isMarkerShown: false,
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <MyMapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
            />
        )
    }
}
// export class Map extends Component{
//
//     construct(props){
//         super(props);
//
//     }
//     render(){
//
//         return(
//
//         )
//     }
// }
