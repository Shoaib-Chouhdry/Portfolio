import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div>
      <div className='ccontainer'>
      <div className=' hello'>
         <div className='img'>
           <img src={props.img} alt="" />
         </div>
           <div>{props.intro}</div>
     </div>
    </div>
    </div>
  )
}

export default Cards
