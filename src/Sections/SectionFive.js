import React from 'react'

import applewatchlogo from '../commonResource/images/icons/watchseries8.png'
import m2logo from '../commonResource/images/icons/m2logo.png'

function SectionFive() {
  return (
    <div>

    <section className="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
					
						<div className="title-wrapper bold white">
							iPad Pro
						</div> 
						<div className="description-wrapper white">
							Supercharged by 
							<img img src={m2logo} />
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
							<div className="logo-wrapper">
								<img src={applewatchlogo} />
							</div>
						</div>

						<div className="description-wrapper white">
							A healthy leap ahead
						</div>

						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>
						
					</div>
				</div>					
			</div>
		</div> 
	</section>
    
    </div>
  )
}

export default SectionFive