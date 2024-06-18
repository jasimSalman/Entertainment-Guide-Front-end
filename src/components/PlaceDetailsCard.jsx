const PlaceDetailsCard = ({
  placePoster,
  placeName,
  placePrice,
  placeDescription,
  placeLocation,
}) => {
  return (
    <div>
      <div className="left-section">
        <div>
          <img src={placePoster} width="100px" height="100px" />
        </div>
        <div>
          <h2> place name :{placeName}</h2>
        </div>
        <div>
          <h2> place price :{placePrice}</h2>
        </div>
      </div>
      
      <div className="mid-section">
        <div>
          <p> place Description :{placeDescription}</p>
        </div>
      </div>
      <div>
        <h2>place Location :{placeLocation}</h2>
      </div>
    </div>
  )
}

export default PlaceDetailsCard
