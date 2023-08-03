import React from "react";
import SkillCard from "./SkillCard";

class About extends React.Component {

    aboutMeSubheading = "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology";
    ab = () =>{
        return(
            <div>
                Hello! I'm Abdul Gani Shaikh, a Mumbai-based
                <span className="primary-color-text"> Android</span> and <span  className="primary-color-text">Web Developer.</span>
                <br/><br/>I recently graduated in computer science from<span className="primary-color-text"> Watumull Institute</span> and gained practical experience through internships, crafting user-friendly mobile apps and responsive websites.
                <br/><br/>With a passion for technology and a commitment to excellence, I'm eager to contribute my skills to a dynamic team like yours. Let's connect and create something amazing together!
            </div>
        );
    }

    skills = [
        'fa-brands fa-html5 fa-5x', 
        'fa-brands fa-css3 fa-5x', 
        'fa-brands fa-js fa-5x', 
        'fa-brands fa-java fa-5x',
        'fa-brands fa-github fa-5x',
        'fa-brands fa-react fa-5x',
        'fa-brands fa-c fa-5x',
        'fa-solid fa-database fa-5x',
        'fa-brands fa-android fa-5x',
        'fa-brands fa-python fa-5x'
    ];


    render(){
        return(
            <div id="about">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-12 pt-5 pb-3 text-center">
                                <h1 className="display-4 heading-underline" >About me</h1>
                                <h6 className="pt-3 display-6 small-text">{this.aboutMeSubheading}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6" >
                                <h1 className='display-6 text-center primary-color-text medium-text'>
                                    Get to know me!
                                </h1>
                                <p className="small-text" >
                                    {this.ab()}
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <h3 className="display-4 primary-color-text medium-text" >Connect with me</h3>
                                <div className="social-links py-4">
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
                        </div>
                        <div className="row pt-5 pb-3 text-center">
                            <h1 className="display-4 primary-color-text medium-text" >My Skills</h1>
                        </div>
                        <div className="row pb-5 justify-content-center">
                            {this.skills.map(key => (
                                    <SkillCard icon={key}/>
                                ))}
                        </div>
                    </div>
                </div>
        );
    }
}

export default About;