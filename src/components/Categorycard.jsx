import "../App.css"
import { Link } from "react-router-dom"

const CategoryCard = (props) => {
  return (
    <Link to={"/places"}>
      <div className="categCard" id={props.id}>
        <div className="categCard2"/>
        <h3>{props.name}</h3>
        <img src={props.categoryPoster} />
      </div>
    </Link>


  )
}

export default CategoryCard
