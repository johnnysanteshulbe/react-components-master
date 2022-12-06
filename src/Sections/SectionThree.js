import React from 'react'
import cardlogo from '../commonResource/images/icons/cardlogo.png'

function SectionThree() {
  return (
    <div>
    <section className="third-hightlight-wrapper">
		<div className="container">
		   <div className="top-logo-wrapper">
					        <div className="card-wrapper">
					        <img src={cardlogo} />
				            </div>
						</div>
			<div className="brief-description-wrapper white">
				Save 5% on Apple products with a <br />
				new Apple Card through December 25.
			</div> 
      <div className="description-wrapper white">
				Only at Apple. Exclusions and terms apply.
			</div>

			<div className="links-wrapper">
		<ul>
			<li><a href="">Learn more</a></li>
			<li><a href="">Apply now</a></li>
		</ul> 
	</div>
		</div>
	</section>
    </div>
  )
}

export default SectionThree