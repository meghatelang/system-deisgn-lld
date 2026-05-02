import React from "react";
import { ACCORDION_DATA } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  return (
    <div>
      {ACCORDION_DATA.map((acc, i) => (
        <div key={i}>
          <div>{acc.title}</div>
          <FontAwesomeIcon icon={faArrowDown} size="lg" />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
