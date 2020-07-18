import React from 'react'
import './../../styles/Footer.css'

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <h6 className= "center white-text lighten-5">Developed by SilvenLEAF</h6>
      
        <div class="my-social-icons-holder">

              <span class="my-social-icon"><i class="fa fa-github"></i></span>
              <span class="my-social-icon"><i class="fa fa-instagram"></i></span>
              <span class="my-social-icon"><i class="fa fa-youtube-play"></i></span>

        </div>

        <div id="my-footer-copyright">
          <div className="center-align">&copy; SilvenLEAF all rights reserved 2020</div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
