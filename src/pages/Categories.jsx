import CategoryCard from '../components/CategoryCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import { BASE_URL } from '../services/api'

const Categories = () => {
  const [categories, setCategories] = useState([])

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
      <Search />
      <div className="mainCard">
        {categories.map((Category) => (
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
