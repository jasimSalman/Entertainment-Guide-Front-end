import React, { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../services/api"
import CategoryCard from "../components/CategoryCard"
import Search from "../components/Search"

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchSubmitted, setSearchSubmitted] = useState(false)

  const getCategories = async () => {
    try {
      let res = await axios.get(`${BASE_URL}/categories`)
      setCategories(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div>
      <Search
        setSearchResults={setSearchResults}
        setSearchSubmitted={setSearchSubmitted}
      />
      <div className="mainCard">
        {searchSubmitted && searchResults.length > 0
          ? searchResults.map((place) => (
              <div key={place._id} className="searchResult">
                <a href={`/places/${place._id}`}>
                  <div className="Card">
                    <div className="card-Cover" />
                    <img src={place.placePoster} />
                    <h3 className="card-title">{place.placeName}</h3>
                  </div>
                </a>
              </div>
            ))
          : categories.map((Category) => (
              <CategoryCard
                key={Category._id}
                id={Category._id}
                name={Category.categoryName}
                poster={Category.categoryPoster}
              />
            ))}
      </div>
    </div>
  )
}

export default Categories
