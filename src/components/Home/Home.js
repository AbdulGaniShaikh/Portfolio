import React from "react";
import me from '../../assets/img/user.png'
import resume from '../../assets/pdf/resume.pdf'


class Home extends React.Component {

    state = {
        name: 'Abdul Gani Shaikh',
        description: 'Adaptable Android and Web Developer - Crafting Seamless Experiences.'
    }

    render() {
        return (
            <header id="header">
                <div class="container">
                    <div class="row justify-content-md-center align-items-center vh-100" >
                        <div class="col-md-6 mt-3">
                            <div>
                                <h6>Hi, My name is</h6>
                                <h3 class="display-4 primary-color-text">{this.state.name}</h3>
                                <p>{this.state.description}</p>
                                <a href={resume} target='_blank'>
                                    <button type="button" class="btn btn-outline-light">
                                        Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-6 text-center profile-container">
                            <img id='profile-img' src={me} alt="Abdul Gani Picture" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Home;