import '../styles/Testimonial.css'


function Testimonial(props) {
  return (
    <div className='testimonial-container'>
      <img className='testimonial-img'
//by using -> `` with --> ${js code} we can create a dinamic character chain with js
      src={require(`../images/testimonial-${props.image}.png`)} 
      alt={`testimonial ${props.image} img`} />
      <div className='testimonial-text-container'>
        <p className='testimonial-name'><strong>{props.name}</strong> {props.country}</p>
        <p className='testimonial-position'>{props.position} - <strong>{props.company}</strong></p>
        <p className='testimonial-textbox'>"{props.testimonial}"</p>
      </div>
    </div>
  )
}

export default Testimonial