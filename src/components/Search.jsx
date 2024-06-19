import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Search() {
  const [placeName, setPlaceName] = useState('')
  const [results, setResults] = useState([])
  const [searchSubmitted, setSearchSubmitted] = useState(false)

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:3001/places/search', {
        placeName: placeName
      })
      setResults(response.data)
      setSearchSubmitted(true)
      setPlaceName('')
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  const handleInputChange = (e) => {
    setPlaceName(e.target.value)
    setSearchSubmitted(false)
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Place Name"
        value={placeName}
        onChange={handleInputChange}
        onClick={() => setSearchSubmitted(false)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchSubmitted && results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {results.map((place, index) => (
              <Link to={`/places/${place._id}`} key={index}>
                <li>{place.placeName}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Search
