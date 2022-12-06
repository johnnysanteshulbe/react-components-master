import React from 'react'

import ultrawatchlogo from '../commonResource/images/icons/ultrawatchlogo.png'

import airpadlogo from '../commonResource/images/icons/airpod.png'
import YouTube from '../YouTube/YouTube'


function SectionSix() {
  return (
    <div>

    <section className="sixth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
					     <div className="top-logo-wrapper">
					        <div className="logo-wrapper">
					        <img src={ultrawatchlogo} />
				            </div>
						</div>
                            
						
						<div className="description-wrapper black">
							Adventure awaits.
						</div>

						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
                
							</ul> 
             
						</div>
					</div>
				</div>


				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
						<div className="airpad-wrapper airpad">
					        <img src={airpadlogo} />
							<div className="title-wrapper bold">
		                      AirPods
	                            </div> 
				            </div>
							
						</div>
						<div className="description-wrapper black">
							Share the joy.
						</div>
						
						<div className="links-wrapper">
							<ul>
								<li><a href="">Shop</a></li>
							</ul>
						</div>

					</div>
				</div>					
			</div>
		</div>

		<YouTube />
		
	</section>
    
    </div>
  )
}

export default SectionSix