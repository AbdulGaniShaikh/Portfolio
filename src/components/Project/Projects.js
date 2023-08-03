import React from "react";
import ProjectCard from "./ProjectCard";
import TournamentImg from "../../assets/projects/t1.png"
import ForumImg from "../../assets/projects/f1.png"
import NutritionImg from "../../assets/projects/n1.png"
import MPImg from "../../assets/projects/mp1.png"
import CyberMedia from "../../assets/projects/s1.png"
import PlantApp from "../../assets/projects/p1.png"

class Projects extends React.Component {


    projectsSubheading = 'Here you will find some of the personal and clients projects that I created with each project containing its own source files';


    render() {
        return (
            <div id="projects">
                <div className="container">
                    <div className="row py-4">
                        <div className="col-md-12 pt-5 pb-3 text-center">
                            <h1 className="display-4 heading-underline" >Projects</h1>
                            <h6 className="pt-3 display-6 small-text">{this.projectsSubheading}</h6>
                        </div>
                    </div>
                    <div className="row mb-5 justify-content-md-center">
                        <ProjectCard
                            title="Nutrition App"
                            description="Nutrition is a health and fitness app that provides weight loss plans as well as weight gaining plan according to your BMI. This app also includes BMI calculator and provides diet according to the BMI. Google’s Firebase is used for authentication and database"
                            project_img={NutritionImg}
                            github_url="https://github.com/AbdulGaniShaikh/Nutrition-App"
                        />
                        <ProjectCard
                            title="Tournament App"
                            description="In this project we have created a Tournament Hosting App using Android Studio. We used Firebase Firestore Database to store all the data tournament and user data and Firebase Authentication to authenticate users in our app."
                            project_img={TournamentImg}
                            github_url="https://github.com/AbdulGaniShaikh/TournamentApp"
                        />
                        <ProjectCard
                            title="Forum App"
                            description="In this project, I have created a Forum App where people can talk and discuss about various topic. I have used Firebase Firestore Database to store all the data forum and user data and Firebase Authentication to authenticate users in our app."
                            project_img={ForumImg}
                            github_url="https://github.com/AbdulGaniShaikh/ForumApp"
                        />
                        <ProjectCard
                            title="Multi Media Player Software"
                            description="I have created a Desktop Application to play media file of different format including formats like .wav,.ogg,.mp4, etc. The project was mafe using JavaFx The purpose of this project was to get an idea of how media players work."
                            project_img={MPImg}
                            github_url="https://github.com/AbdulGaniShaikh/MediaPlayerPro"
                        />
                        <ProjectCard
                            title="Cyber Fraud Social Media"
                            description="Cyber Security Social Media lets user to post information related to Cyber fraud happened to the user and alert the other user on the app to take preventive measures. User can post image and add description about the uploaded image."
                            project_img={CyberMedia}
                            github_url="https://github.com/AbdulGaniShaikh/CyberfraudSocialMedia"
                        />
                        <ProjectCard
                            title="Plant Disease Detection"
                            description="Plant Disease Detection lets user to know about the health of a plant whether it is healthy or not by clicking a picture of the plant leaf. After detection the disease of the plant and accordingly causes and solutions are provided."
                            project_img={PlantApp}
                            github_url="https://github.com/AbdulGaniShaikh/PlantDiseaseDetection"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;