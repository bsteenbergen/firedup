import GoogleMapReact from 'google-map-react'

const Map = ({center, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact>
                bootstrapURLKeys={{key: 'AIzaSyBJoS6QCWdMswvkpSF3S5W8UzxFWB2DZ3c'}}
                deafultCenter = {center}
                defaultZoom = {zoom}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: { 
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map

// Map component created with reference to Traversy Media's video: https://www.youtube.com/watch?v=ontX4zfVqK8