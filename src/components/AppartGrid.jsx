 import React from 'react'
 import "./AppartGrid.scss"
 import ApartmentCard from "./ApartmentCard.jsx"
 
 function AppartGrid() {
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