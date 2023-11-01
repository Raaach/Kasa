 import React, { useEffect, useState } from 'react'
 import "./AppartGrid.scss"
 import ApartmentCard from "./ApartmentCard.jsx"

 
 function AppartGrid() {
  const [apartments, setApartments]= useState([])

  useEffect(fetchApartments,[]) // useEffect avec array wide = excute seulement au chargement 

  function fetchApartments(){
    fetch("db.json")            //on a utilisé fetch pour faire aparaitre les infos en json/se n'est pas le même res 
      .then((res) => res.json()) 
      .then((res)=>setApartments(res)) 
      .catch((err) => console.error(err))
  }
   return (
    <div className='grid'>
      {apartments.map((apartment)=>(
        <ApartmentCard title={apartment.title} imageUrl= {apartment.cover}/>  //apartment est un gros objet qui contient title, tags etc... //on fait appelle cette ligne pour avoir plusieur apartement au lieu de tout écrire à la main chaque div 
      ))}
    </div>
   )
 }
 
 export default AppartGrid