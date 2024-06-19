import React, { useState, useEffect } from "react"
import axios from "axios"

function Search() {
  const [placeName, setPlaceName] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    console.log(results) // Log the updated results whenever it changes
  }, [results]) // Run this effect whenever results changes

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:3001/places/search", {
        PlaceName: placeName,
      })
      console.log(response.data) // Log the entire response object
      setResults(response.data)
    } catch (error) {
      console.error("Error:", error.message)
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Place Name"
        value={placeName}
        onChange={(e) => setPlaceName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.length === 0 ? (
          <p>No results found for "{placeName}".</p>
        ) : (
          <ul>
            {results.map((place, index) => (
              <li key={index}>{place.PlaceName}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Search
