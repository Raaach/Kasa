import React, { useEffect, useState } from 'react'
import { DescriptionPanel } from "../components/DescriptionPanel"
import "./ApartementPages.scss"
import {ImageBanner} from '../components/ImageBanner'
import {ApartmentHeader} from '../components/ApartmentHeader'
import { useLocation } from 'react-router-dom'


function ApartmentPage() {
    const location= useLocation()
    const [flat, setFlat]= useState(null) 
    useEffect(fetchDataApartment,[])

    function fetchDataApartment(){
        fetch("db.json")
            .then((res)=>res.json())
            .then((flats)=> {
                const flat= flats.find((flat)=>flat.id === location.state.apartmentId)
                setFlat(flat)
            })//on lui demande de trouver et ne renvoyer que les données de l'id corespondant à location.state... du clique
            .catch((err)=>console.log(err))
    }
    if(flat == null) return <div>...Loading</div>
    return (
        <div className='apartment-page'>
         flat= {JSON.stringify(flat)}
           <ImageBanner imageUrl={flat.cover}/>
           <ApartmentHeader flat={flat}/>
            <div className='apartment__description__area'>
                <DescriptionPanel/>
                <DescriptionPanel/>
            </div>
        </div>
    )
}

export default ApartmentPage