import React from 'react'

const  Footer = () => {
    return (
      <>
        <footer>
          <div className="d-flex align-items-center justify-content-around footerSection">
            <div className="d-flex align-items-center">
              <i class="fab fa-facebook-f mr-4"></i>
              <i class="fab fa-instagram mr-4"></i>
              <i class="fab fa-linkedin-in mr-4"></i>
              <i class="fab fa-twitter mr-4"></i>
              <div className="d-flex align-items-center ml-3">
                <i class="fas fa-globe"></i>
              </div>
            </div>
            <div className="footerTags">
              <a href className="mr-4" >Terms</a>
              <a href>Impressum</a>
            </div>
          </div>
        </footer>
      </>
    );
}
export default Footer;
