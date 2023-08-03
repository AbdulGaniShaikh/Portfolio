import React from "react";

function SkillCard(props) {
    return (
        <div className="col-md-2 col-5 py-5 text-center skills m-2">
            <i className={props.icon} />
        </div>
    );
}

export default SkillCard;