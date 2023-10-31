import React from 'react'
import { DescriptionPanel } from "../components/DescriptionPanel"
import "./ApartementPages.scss"
import {ImageBanner} from '../components/ImageBanner'
import {ApartmentHeader} from '../components/ApartmentHeader'


function ApartmentPage() {
  return (
        <div className='apartment-page'>
           <ImageBanner/>
           <ApartmentHeader/>
            <div className='apartment__description__area'>
                <DescriptionPanel/>
                <DescriptionPanel/>
            </div>
        </div>
    )
}

export default ApartmentPage