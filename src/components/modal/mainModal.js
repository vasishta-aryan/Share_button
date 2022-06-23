import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faLink } from "@fortawesome/free-solid-svg-icons";

function MainModal(closeModal) {
  return (
    <div className="modalBackground" onClick={() => closeModal(false)}>
      <div className="info">
        <div className="title">
          <div className="random-icon1"></div>
          <p className="main_para">
            <p className="para1">Share to web</p>
            <p className="para2">Publish and share the link</p>
          </p>
          <div className="toggle">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <hr />
        <div className="Main_body">
          <div className="body1">
            <input
              className="email_input"
              type="text"
              placeholder="People,emails,groups"
            ></input>
            <button className="invite">Invite</button>
          </div>
          <div className="body2">
            <div className="random-icon2"></div>
            <p className="main_para">
              <p className="para3">Everyone At OSlash</p>
              <p className="para4">25 workspace members</p>
            </p>
            <div className="main_dropdown">
              <label class="dropdown">
                <div class="dd-button">No access</div>

                <input type="checkbox" class="dd-input" id="test" />

                <ul class="dd-menu">
                  <li>Action</li>
                  <li>Edit</li>
                  <li>View</li>
                </ul>
              </label>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer">
          <div className="question_mark">
            <FontAwesomeIcon icon={faCircleQuestion} />
            &nbsp;&nbsp;Learn about sharing
          </div>
          <div className="link">
            <FontAwesomeIcon icon={faLink} />
            &nbsp;&nbsp; Copy Link
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainModal;
