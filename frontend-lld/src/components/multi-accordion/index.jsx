import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ACCORDION_DATA } from "../utils/constants";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const MultiAccordion = () => {
  const [accordion, setAccordion] = useState([]);
  return (
    <div className="w-100 flex flex-col gap-2">
      {ACCORDION_DATA.map((acc, i) => (
        <div key={i}>
          <div className="flex justify-between border border-gray-300 shadow-lg p-2 bg-sky-200">
            <div>{acc.title}</div>
            <FontAwesomeIcon
              icon={accordion.includes(i) ? faAngleDown : faAngleUp}
              size="lg"
              className="cursor-pointer"
              onClick={() =>
                accordion.includes(i)
                  ? setAccordion(accordion.filter((acc) => acc !== i))
                  : setAccordion([...accordion, i])
              }
            ></FontAwesomeIcon>
          </div>
          {accordion.includes(i) && (
            <div className="border-b border-l border-r border-gray-300 p-2 shadow-lg">
              {acc.body}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiAccordion;
