import React from 'react'
import "./ImageBanner.scss"

export function ImageBanner(props) {
  const imageUrl = props.imageUrl ? props.imageUrl : "https://picsum.photos/1920/1080"
  return (
    <div className='image__banner'>
        <img src={imageUrl} alt=""/>
    </div>
  )
}
