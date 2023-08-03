import React from "react";


class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div class="container-fluid p-5">
                    <div class="row pt-5">
                        <div className="col-md-1"></div>
                        <div class="col-md-5 followus mb-3">
                            <h3 className="display-6 small-text fw-bold">Abdul Gani Shaikh</h3>
                            <p className="smaller-text">A focused Android and Web Developer building  Websites and Mobile Applications that leads to the success of the overall product</p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4 text-center ">
                            <p className="small-text fw-bold">Connect with me</p>
                            <div className="social-links">
                                <a href="https://www.instagram.com/shkhabdulgani" target="_blank">
                                    <i className="fa-brands fa-instagram fa-2x px-4"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/abdul-gani-shaikh-b657a5213/" target="_blank">
                                    <i className="fa-brands fa-linkedin fa-2x px-4"></i>
                                </a>
                                <a href="https://github.com/AbdulGaniShaikh" target="_blank">
                                    <i className="fa-brands fa-github fa-2x px-4"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row dropdown-divider mt-5 mb-5"></div>
                    <div className="row text-center">
                        <div className="col-md-12" style={{ fontSize: '10px' }}>©Copyright 2023. Made by Abdul Gani Shaikh</div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;