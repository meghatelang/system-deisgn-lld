import React from "react";
import type { FileNode } from "../../utils/data";

interface FileListProps {
  fileFolderData: FileNode[];
  handleToggle: (node: FileNode) => void;
  addFileToFolder: (node: FileNode) => void;
  convertToFolder: (node: FileNode) => void;
}

const FileList = ({
  fileFolderData,
  handleToggle,
  addFileToFolder,
  convertToFolder,
}: FileListProps) => {
  return (
    <ul>
      {fileFolderData.map((node, i) => {
        const key = `${node.name}-i`;
        return (
          <li className="file-list" key={key}>
            <button
              onClick={() => handleToggle(node)}
              onDoubleClick={() => convertToFolder(node)}
            >
              {node?.files ? (node.isOpen ? "-" : "+") : ""}
              <span>{node?.name}</span>
            </button>
            {node?.files && (
              <button
                onClick={() => addFileToFolder(node)}
                className="add-file-btn"
              >
                Add File (+)
              </button>
            )}
            {node?.files && node?.isOpen && (
              <FileList
                fileFolderData={node.files}
                handleToggle={handleToggle}
                addFileToFolder={addFileToFolder}
                convertToFolder={convertToFolder}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default FileList;
