import React, { useState } from "react";
import type { FileNode } from "../../utils/data";
import FileList from "./FileList";

interface FileDataProps {
  fileFolderData: FileNode[];
  handleOpenClose: (node: FileNode) => void;
  inputVal: string;
  handleFileAdd: (node: FileNode) => void;
  onDoubleClick: (node: FileNode) => void;
}

const FileData = ({
  fileFolderData,
  handleOpenClose,
  inputVal,
  handleFileAdd,
  onDoubleClick,
}: FileDataProps) => {
  return (
    <div className="file-list-container">
      {fileFolderData.map((node, i) => (
        <>
          <li
            key={`${node.name}-i`}
            className="file-list"
            onDoubleClick={() => onDoubleClick(node)}
          >
            <button onClick={() => handleOpenClose(node)}>
              {node.files ? (node?.isOpen ? "-" : "+") : ""}
            </button>
            {node?.name}

            <button className="file-add" onClick={() => handleFileAdd(node)}>
              +
            </button>
            {node.files && node?.isOpen && (
              <FileList
                fileFolderData={node.files}
                inputVal={inputVal}
                handleOpenClose={handleOpenClose}
                handleFileAdd={handleFileAdd}
                onDoubleClick={onDoubleClick}
              />
            )}
          </li>
        </>
      ))}
    </div>
  );
};

export default FileData;
