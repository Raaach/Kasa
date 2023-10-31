import React from 'react'
import {Link} from "react-router-dom"
import "./ApartmentCard.scss"

function ApartmentCard() {
  return (
    <Link to="/flat">
      <div className='apartment'> 
        <img className='apartment__card__image' src="http://picsum.photos/200/300" alt=""/>
        <div className='apartment__subtitle'>Titre de la location</div>
      </div>
    </Link>
  )
}

export default ApartmentCard