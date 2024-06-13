import "../App.css"
import CategoryCard from "../components/Categorycard"
import { useEffect, useState } from "react"
import axios from "axios"

const Categories = () => {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      let res = await axios.get("http://localhost:3001/categories")
      setCategories(res.data)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className="categories">
      {categories.map((Category) => (
        <CategoryCard
          key={Category._id}
          id={Category._id}
          name={Category.categoryName}
          poster={Category.categoryPoster}
        />
      ))}
    </div>
  )
}

export default Categories