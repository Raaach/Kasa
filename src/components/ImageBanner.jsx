import React, { useState } from 'react'
import "./ImageBanner.scss"

export function ImageBanner(props) {
  const pictures = props.pictures

  const [curentPicture, setCurrentPicture] = useState(0)

  const getClassName = (i) =>{
    if( i === curentPicture) return "show"
    return ""
  }

  const moveToNext=()=>{
    setCurrentPicture((curentPicture+1)%pictures.length) //modulo qui permet de ne pas dépasser une certaine valeur, ici c'est la length
  }
  const moveToPrevious=()=>{
    setCurrentPicture((curentPicture-1)%pictures.length) //modulo qui permet de ne pas dépasser une certaine valeur, ici c'est la length
  }

  return (
    <div className='image__banner'>
      <button onClick={moveToNext}>Next</button>
      <div className='image__container'>
          {pictures.map((pic, i)=>(
            <img key={pic} src={pic} alt='' className={getClassName(i)}></img>
            ))}
            </div>
      <button onClick={moveToPrevious}>Previous</button>
    </div>
  )
}
