import React from 'react'

function SectionSeven() {
  return (
    <div>

    <section className="seven-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
          <div className="logo-wrapper">
								<img src={ultrawatchlogo} />
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
							<div className="logo-wrapper">
								<img src={seasonpasslogo} />
							</div>
						</div>
						<div className="description-wrapper white">
							Every match. Every screen. MLS Season Pass, <br /> only on the Apple TV app. Coming 2023
						</div>
						<div className="links-wrapper-six">
							<ul>
								<li><a href="">Notify me</a></li>
								
                
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

export default SectionSeven