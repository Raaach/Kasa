import React from 'react'
import Banner from '../layout/Banner'
import { DescriptionPanel } from '../components/DescriptionPanel'
import "./About.scss"
import { ImageBanner } from '../components/ImageBanner'

export default function About() {
  return (
    <>
        <ImageBanner/>
        <div className="about__container">    
            <DescriptionPanel/>
            <DescriptionPanel/>
            <DescriptionPanel/>
            <DescriptionPanel/>
        </div>
    </>
  )
}
