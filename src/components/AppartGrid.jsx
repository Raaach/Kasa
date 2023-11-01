 import React from 'react'
 import "./AppartGrid.scss"
 import ApartmentCard from "./ApartmentCard.jsx"

 
 function AppartGrid() {
   fetch("db.json")
    .then((res) => res.json()) 
    .then((res)=>console.log(res.length)) //on a utilisé fetch pour faire aparaitre les infos en json/se n'est pas le même res 
    .catch((err) => console.error(err))
   return (
     <div className='grid'>
     <ApartmentCard/>
     <ApartmentCard/>
     <ApartmentCard/>
     <ApartmentCard/>
     <ApartmentCard/>
     <ApartmentCard/>
     </div>
   )
 }
 
 export default AppartGrid