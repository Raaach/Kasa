import React from 'react'
import { ApartmentDescription } from "../components/ApartmentDescription"
import "./ApartementPages.scss"
import {ApartmentBanner} from '../components/ApartmentBanner'
import {ApartmentHeader} from '../components/ApartmentHeader'


function ApartmentPage() {
  return (
        <div className='apartment-page'>
           <ApartmentBanner/>
           <ApartmentHeader/>
            <div className='apartment__description__area'>
                <ApartmentDescription/>
                <ApartmentDescription/>
            </div>
        </div>
    )
}

export default ApartmentPage