import React, { Component } from 'react';
// import { GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { geocodeAddress } from '../actions'
// import meets from '../data/meets'
import { connect } from 'react-redux';
import MapStyles from "../data/MapStyles.js"


const MyMapComponent = compose( withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />
}),  withScriptjs, withGoogleMap)
    (function (props) {
        console.log("props, ", props);
        let newMarker = props.meets.map((meet) => {
            return (
                <div>
                    <Marker position={{ lat: meet.lat, lng: meet.lng }} onClick={props.onMarkerClick} />
                </div>
            )
        })
            // put this in the return below to check that markers can be shown on the map. They are just for testing purposes!
            // {props.isMarkerShown && <Marker position={{ lat: 37.09024, lng: -95.712891 }} onClick={props.onMarkerClick} />}
            // {props.isMarkerShown && <Marker position={{ lat: 37.09024, lng: -98.712891 }} onClick={props.onMarkerClick} />}


        return (
            <GoogleMap defaultZoom={4} defaultOptions={{ styles: MapStyles }} defaultCenter={{ lat: 37.09024, lng: -95.712891 }}>
            {newMarker}
            </GoogleMap>
)
})


export default class MyFancyComponent extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isMarkerShown: false,
            // meets: this.props.meets
        }
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
            <MyMapComponent meets={this.props.meets} isMarkerShown={this.state.isMarkerShown} onMarkerClick={this.handleMarkerClick}/>
        )
    }
}

//
// function mapStateToProps(state) {
//   console.log('state on Search', state);
//   return {
//     meets: state.meets
//   }
// }

//
// function mapStateToProps(state) {
//   console.log('state on Search', state);
//   return {
//     meets: state.meets
//   }
// }
//
// export default connect(mapStateToProps)(Map);
