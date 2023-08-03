import React from "react";


function ProjectCard(props) {
    return (
        <div class="col-md-4 p-3">
            <div className="card">
                <img src={props.project_img} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title display-6 medium-text">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href={props.github_url} target="_blank"><button className="btn btn-light" href={props.github_link}>Source Code</button></a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;