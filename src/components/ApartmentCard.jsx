import React from 'react'
import {Link} from "react-router-dom"
import "./ApartmentCard.scss"

function ApartmentCard(props) {
  //on récupère l'id
  const state ={
      apartmentId:props.id
    }
//dans Link en dessous, on récupère l'id avec le lien de l'apart 
  return (
    <Link to="/flat" state={state}>   
      <div className='apartment'> 
        <img src={props.imageUrl} alt=""/>
        <div className='apartment__subtitle'>{props.title}</div>
      </div>
    </Link>
  )
}

export default ApartmentCard