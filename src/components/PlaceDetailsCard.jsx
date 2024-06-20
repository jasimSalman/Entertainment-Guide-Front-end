const PlaceDetailsCard = ({
  placePoster,
  placeName,
  placePrice,
  placeDescription,
  placeLocation
}) => {
  return (
    <div>
      <div className="img-container">
        <img src={placePoster} width="100px" height="100px" />
      </div>

      <div className="bellow-section">
        <div className="title">
          <h2>{placeName}</h2>
          <h2>{placePrice}BD</h2>
        </div>

        <div>
          <p>
            <b>Description:</b>
            <br />
            {placeDescription}
          </p>
        </div>

        <div>
          <h2>place Location :{placeLocation}</h2>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetailsCard
