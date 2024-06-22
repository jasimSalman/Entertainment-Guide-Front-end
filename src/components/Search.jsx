import React, { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../services/api"

const Search = ({ setSearchResults, setSearchSubmitted }) => {
  const [placeName, setPlaceName] = useState("")

  const handleSearch = async () => {
    try {
      if (placeName) {
        const response = await axios.post(`${BASE_URL}/places/search`, {
          placeName: placeName,
        })
        setSearchResults(response.data)
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
    </div>
  )
}

export default Search
