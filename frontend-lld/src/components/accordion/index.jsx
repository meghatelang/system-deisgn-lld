import React, { useState } from "react";
import { ACCORDION_DATA } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const [accordion, setAccordion] = useState(0);

  return (
    <div className="w-100 flex gap-2 flex-col">
      {ACCORDION_DATA.map((acc, i) => (
        <>
          <div
            key={i}
            className="flex justify-between border border-gray-300 shadow-lg p-2 bg-sky-200"
          >
            <div>{acc.title}</div>
            <FontAwesomeIcon
              icon={i === accordion ? faAngleDown : faAngleUp}
              size="lg"
              className="cursor-pointer"
              onClick={() => {
                i === accordion ? setAccordion(null) : setAccordion(i);
              }}
            />
          </div>
          {accordion === i && (
            <div className="border-b border-l border-r border-gray-300 p-2 shadow-lg">
              {acc.body}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Accordion;
