import React from "react";
import '../../timeline.css'


class MyCareer extends React.Component {

    subHeading = 'As a recent graduate and a fresher in the field of Android development, I have gained valuable practical experience through multiple internships. During my academic journey, I actively sought opportunities to intern as an Android developer, where I worked on real-world projects, honing my skills in designing and implementing Android applications. I am now eager to leverage this hands-on experience and apply my knowledge in a professional setting, contributing my enthusiasm and dedication to excel as a full-fledged Android developer.'

    career1 = {
        position: 'Android Developer',
        desc: 'To enhance my skills and gain practical experience, I pursued this internship, got trained and developed a simple OTP Verification Android Application using Android Studio with my two other colleagues',
        company: 'Appdid Infotech',
        duration: 'Apr 2019 - Jun 2019',
        icon: 'fa fa-android'
    };
    career2 = {
        position: 'Android Developer',
        desc: 'During my academic journey, I had the valuable opportunity to intern as an Android developer at [Company Name]. During this internship, I actively contributed to real-world projects, collaborating with the development team to design, implement, and test Android applications. This experience equipped me with practical skills and an in-depth understanding of the Android development process, further fueling my passion for mobile app development.',
        company: 'Techq Konnect',
        duration: 'Jun 2021 - Aug 2021',
        icon: 'fa fa-android'
    };

    career3 = {
        position: 'Android Developer',
        desc: 'As a currently active freelance Android developer, I operate as an independent professional, offering my expertise in designing, building, and maintaining Android applications for diverse clients. I work on a flexible basis, collaborating remotely to deliver customized solutions that meet the unique requirements of each project. ',
        company: 'Freelance',
        duration: 'Jan 2022 - present',
        icon: 'fa fa-f'
    };

    careerArr = [this.career1, this.career2, this.career3];

    render() {
        return (
            <div id='career'>
                <div class="container mt-5">
                    <div className="row py-5">
                        <div className="col-md-12 pt-5 pb-2 text-center">
                            <h1 className="display-4 heading-underline" >My Career</h1>
                            <h6 className="pt-3 display-6 small-text">{this.subHeading}</h6>
                        </div>
                    </div>
                    <div class="row pb-5">
                        <div class="col-md-12">
                            <div class="main-timeline">
                                {this.careerArr.map(key => {
                                    return (
                                        <div class="timeline">
                                            <div class="timeline-icon"><i class={key.icon}></i></div>
                                            <div class="timeline-content">
                                                <h3 class="title">{key.position}</h3>
                                                <p>{key.duration} - {key.company}</p>
                                                <p class="description">
                                                    {key.desc}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCareer;