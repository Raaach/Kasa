import React from 'react'
import "./ApartementPages.scss"

function ApartmentPage() {
  return (
        <div className='apartment-page'>
            <div>
                <img src="https://picsum.photos/800/400" alt=""/>
            </div>
            <div className='apartment__header'>
                <div className='apartment__title'>
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <h2>Paris, Île-de-France</h2>
                    <div className='apartment__tags'>
                        <span >Cozy</span>
                        <span >Canal</span>
                        <span >Paris 10</span>
                    </div>
                </div>
                <div className='apartment__owner'>
                    <div className='apartment__owner__details'>
                        <h3>Alexandre Dumas</h3>
                        <div className='apartment__owner__badge'></div>
                    </div>
                    <div className='apartment__owner__stars'>
                        <span> ☆ </span>
                        <span> ☆ </span>
                        <span> ☆ </span>
                        <span> ☆ </span>
                        <span> ☆ </span>
                    </div>
                </div>
            </div>
            <div className='apartment__description'> 
            <p>Description</p>
                <p>
                Ita nobilium cum manibus haec nuptias aurum offertur usque nuptias Spoletium usque ubi tutius dextris sunt Spoletium ad nobilium tamen haec manibus vigore offertur dextris cavatis instituta inminuto ad offertur offertur ad vel artuum inminuto pergunt nuptias vel ubi nobilium dextris vel rogati manibus artuum ita sunt nobilium vigore ubi.    
                </p>
            </div>
            <div className='apartment__description'>
                <p>Description</p>
                <p>
                Ita nobilium cum manibus haec nuptias aurum offertur usque nuptias Spoletium usque ubi tutius dextris sunt Spoletium ad nobilium tamen haec manibus vigore offertur dextris cavatis instituta inminuto ad offertur offertur ad vel artuum inminuto pergunt nuptias vel ubi nobilium dextris vel rogati manibus artuum ita sunt nobilium vigore ubi.    
                </p>
            </div>
        </div>
    )
}

export default ApartmentPage