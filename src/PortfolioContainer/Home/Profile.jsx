import React from "react";
import "./Profile.css";

export default function Profile(){
    return(
        <div className="profile__container">
            <div className="profile_parent">
                <div className="profile_details">
                    <div className="colz">
                        <a href="#!">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="#!">
                            <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href="#!">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="#!">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href="#!">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                    <div className="profile_details_name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Avazbek</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}