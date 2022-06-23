import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

import "../../App.css";
import MainModal from "../modal/mainModal";

export default function LandingPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="LandingPage">
      <h4>Click on Share button</h4>
      <button
        className="shareButton"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Share <FontAwesomeIcon icon={faShareNodes} />
      </button>
      {openModal && <MainModal closeModal={setOpenModal} />}
    </div>
  );
}
