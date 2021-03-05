
export default function Profile() {
    return (
<div>
  <div className="w3-light-grey">
    {/* Page Container */}
    <div className="w3-content w3-margin-top" style={{maxWidth: 1400}}>
      {/* The Grid */}
      <div className="w3-row-padding">
        {/* Left Column */}
        <div className="w3-third">
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container">
              <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/117782714_1760081814142901_1996829614075543287_o.jpg?_nc_cat=110&ccb=3&_nc_sid=09cbfe&_nc_ohc=66_mhhsNPmwAX-auOWc&_nc_ht=scontent.fbkk5-4.fna&oh=6f35a79d56e7dd52ef7fdcb8d67cf7c4&oe=6066B194" style={{width: '100%'}} alt="Avatar" />
              <div className="w3-display-bottomleft w3-container w3-text-black">
             
            </div >
             <div style={{marginLeft:"15px"}}><h2>Naratip Thongtaluang</h2></div>
              </div>
            <div className="w3-container">
              <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Front-end Developer</p>
              <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Trang, Thailand</p>
              <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />5735512153@psu.ac.th</p>
              <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />0816769629</p>
              <p><i className="fa fa-git fa-fw w3-margin-right w3-large w3-text-teal" /><a href="https://github.com/kengzas1253/">kengzas1253</a></p>
              <hr />
              <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Skills</b></p>
              <p>C</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '90%'}}>90%</div>
              </div>
              <p>HTML,CSS,JavaScript</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '80%'}}>
                  <div className="w3-center w3-text-white">80%</div>
                </div>
              </div>
              <p>Nodejs,React.js</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '85%'}}>85%</div>
              </div>
              <p>Java</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '75%'}}>75%</div>
              </div>
           
              <p>Python</p>
              <div className="w3-light-grey w3-round-xlarge w3-small">
                <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '50%'}}>50%</div>
              </div>
              <br />
              <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Languages</b></p>
              <p>Thai</p>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '100%'}} />
              </div>
              <p>English</p>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-round-xlarge w3-teal" style={{height: 24, width: '85%'}} />
              </div>
           
              <br />
            </div>
          </div><br />
          {/* End Left Column */}
        </div>
        {/* Right Column */}
        <div className="w3-twothird">
          <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work Experience </h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Introduce yourself</b></h5>
            
              <p>I'm interested in technology and computers.I like to study new knowledge in personal development. And want to work as a team to learn and develop further  </p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Practical training</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />May 2020 - July 2020</h6>
              <p>Web Developer at Liand-Udom company. </p>
              <hr />
            </div>
           
          </div>
          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Education</h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Saparachinee Trang School</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2008-2013</h6>
              <p>Hight school</p>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Prince of Songkla University</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2013 - 2020</h6>
              <p>Bchelore Degree Computer Engineering</p>
              <hr />
            </div>
            
          </div>
          {/* End Right Column */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Page Container */}
    </div>
    <footer className="w3-container w3-teal w3-center w3-margin-top">
      <p>Find me on social media.</p>
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-git w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
      <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
    </footer>
  </div>
</div>

    )
}
