import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { BASE_URL } from "../services/api"

function Search() {
  const [placeName, setPlaceName] = useState("")
  const [results, setResults] = useState([])
  const [searchSubmitted, setSearchSubmitted] = useState(false)

  const handleSearch = async () => {
    try {
      if (placeName) {
        const response = await axios.post(`${BASE_URL}/places/search`, {
          placeName: placeName,
        })
        setResults(response.data)
        setSearchSubmitted(true)
        setPlaceName("")
      }
    } catch (error) {
      console.error("Error:", error.message)
    }
  }

  const handleInputChange = (e) => {
    setPlaceName(e.target.value)
    setSearchSubmitted(false)
  }

  return (
    <div className="searchForm">
      <input
        type="text"
        placeholder="Enter Place Name"
        value={placeName}
        onChange={handleInputChange}
        onClick={() => setSearchSubmitted(false)}
        className="inputFeild"
      />
      <button onClick={handleSearch} className="searchButton">
        Search
      </button>
      <div>
        {searchSubmitted && results.length === 0 ? (
          <p>No Place found.</p>
        ) : (
          <div className="serachResult">
            {results.map((place) => (
              <Link to={`/places/${place._id}`}>{place.placeName}</Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
