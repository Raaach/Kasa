import React from 'react'
import Banner from '../layout/Banner'
import { DescriptionPanel } from '../components/DescriptionPanel'
import "./About.scss"
import { ImageBanner } from '../components/ImageBanner'

export default function About() {
  return (
    <>
        <ImageBanner />
        <div className="about__container">    
            <DescriptionPanel title="Fiabilité" content="ça peut vous être utile"/>
            <DescriptionPanel title="Respect" content="ça peut vous être utile"/>
            <DescriptionPanel title="Service" content="ça peut vous être utile"/>
            <DescriptionPanel title="Responsabilité" content="ça peut vous être utile"/>
        </div>
    </>
  )
}
