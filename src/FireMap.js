import GoogleMapReact from "google-map-react"
import FireMarker from "./FireMarker"
import "./FireMap.css"

const FireMap = ({ eventData }) => {
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <FireMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
        />
      )
    }
    return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBJoS6QCWdMswvkpSF3S5W8UzxFWB2DZ3c" }}
        center={{
          lat: 38.3265,
          lng: -120.8756,
        }}
        zoom={6.5}
      >
        {markers}
      </GoogleMapReact>
    </div>
  )
}

export default FireMap

// FireMap component created with reference to Traversy Media's video: https://www.youtube.com/watch?v=ontX4zfVqK8
