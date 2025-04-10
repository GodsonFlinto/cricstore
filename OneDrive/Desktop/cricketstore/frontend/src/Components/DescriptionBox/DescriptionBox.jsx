import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Loved the variety of sports gear—especially the cricket section. Found everything I needed. One star off because delivery took a few days longer than expected, but customer service kept me updated.</p>
            <p>I ordered a pair of running shoes and a yoga mat. Not only were the products exactly as described, but they also arrived ahead of schedule. The website is easy to navigate and offers great deals. Will definitely shop here again!</p>
        </div>
    </div>
  )
}
