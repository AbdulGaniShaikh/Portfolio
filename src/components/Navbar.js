import React from "react";

class Navbar extends React.Component {
    render(){
        return(
            <div className="nav-container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-light">
                <div class="bg-image"></div>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><i className="primary-color-text">0. </i> Abdul Gani</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#">
                                    <i className="primary-color-text">1. </i> 
                                    Home
                                    </a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#about"><i className="primary-color-text">2. </i> About</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#projects"><i className="primary-color-text">3. </i> Projects</a>
                            </li>
                            <li class="nav-item mr-5">
                                <a class="nav-link" href="#career"><i className="primary-color-text">4. </i> Career</a>
                            </li>
                            {/* <li class="nav-item mr-5">
                                <a class="nav-link" href="#contact"><i className="primary-color-text">5. </i> Contact</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        );
    }
}

export default Navbar;