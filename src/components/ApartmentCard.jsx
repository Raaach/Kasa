import React from 'react'
import {Link} from "react-router-dom"
import "./ApartmentCard.scss"

function ApartmentCard(props) {
  return (
    <Link to="/flat">
      <div className='apartment'> 
        <img src={props.imageUrl} alt=""/>
        <div className='apartment__subtitle'>{props.title}</div>
      </div>
    </Link>
  )
}

export default ApartmentCard