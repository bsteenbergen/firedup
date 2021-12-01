import GoogleMapReact from "google-map-react"

const FireMap = () => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBJoS6QCWdMswvkpSF3S5W8UzxFWB2DZ3c" }}
        center={{
          lat: 38.3265,
          lng: -120.8756,
        }}
        zoom={6.5}
      ></GoogleMapReact>
    </div>
  )
}

export default FireMap

// Map component created with reference to Traversy Media's video: https://www.youtube.com/watch?v=ontX4zfVqK8
