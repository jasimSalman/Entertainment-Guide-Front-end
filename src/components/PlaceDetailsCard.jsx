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
          <div className="title">
            <h2>{placeName}</h2>
            <h2>{placePrice}BHD</h2>
          </div>
        </div>
      </div>

      <div className="placeDescription">
        <p>{placeDescription}</p>
        <h2>{placeLocation}</h2>
      </div>
    </div>
  )
}

export default PlaceDetailsCard
