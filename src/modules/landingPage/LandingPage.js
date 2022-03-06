import React from 'react'
import CustomCard from '../../commonComponents/card/Card'
import hero from '../../assets/images/Hero.png'
const data = [
  {
    head: "Heading Data 1",
    desp: "Something Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img: hero,
    btn: 1 ,
    bg: 'green'
  },
  {
    head: "Heading Data 2",
    desp: "Something Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img: hero,
    btn: 2,
    bg: 'red'

  },
  {
    head: "Heading Data 3",
    desp: "Something Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    img: hero,
    btn: 3,
    bg: 'yellow'
  },

]

export default function LandingPage() {
  return (
    <div>
      <h2>This is a card</h2>

      <div style={{display: 'flex'}}>
      <CustomCard data={data}   data2="abc" />
      </div>
    </div>
  )
}
