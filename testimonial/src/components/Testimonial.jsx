import React from 'react'
import '../styles/Testimonial.css'


function Testimonial() {
  return (
    <div className='testimonial-container'>
      <img className='testimonial-img' 
      src={require('../images/testimonial-jason.png')} 
      alt='testimonial user img' />
      <div className='testimonial-text-container'>
        <p className='testimonial-name'>Jason Belgium</p>
        <p className='testimonial-position'>Systems Engineer - Apple</p>
        <p className='testimonial-textbox'>"I was looking for a software development company to help me build a new website
        for my business. I was hesitant at first, because I had heard some horror stories about companies that promised 
        the world and then delivered a subpar product. But after reading some positive testimonials about MERAKI, 
        I decided to give them a try."</p>
      </div>
    </div>
  )
}

export default Testimonial