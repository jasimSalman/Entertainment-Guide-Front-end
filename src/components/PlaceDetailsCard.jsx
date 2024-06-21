const PlaceDetailsCard = ({
  placePoster,
  placeName,
  placePrice,
  placeDescription,
  placeLocation,
}) => {
  return (
    <div className="info">
      <div className="placePoster">
        <img src={placePoster} />
        <div className="bellow-section">
          <div className="PlaceInfo">
            <h2>{placeName}</h2>
            <h2>{placePrice}BHD</h2>
          </div>
        </div>
      </div>

      <div className="placeDescription">
        <p>{placeDescription}</p>
        <br />
        <div>
          <iframe
            src={placeLocation}
            width="400"
            height="100"
            style={{ border: "1px solid gray", borderRadius: "4px" }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetailsCard
