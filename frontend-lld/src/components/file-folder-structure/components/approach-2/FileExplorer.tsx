import React, { useState } from "react";
import "./file-explorer.css";
import { initialData, type FileNode } from "../../utils/data";
import FileList from "./FileList";

const FileExplorer = () => {
  const [text, setText] = useState("");
  const [fileFolderData, setFileFolderData] = useState(initialData);

  const updateTree = (
    list: FileNode[],
    targetNode: FileNode,
    callback: any,
  ): FileNode[] => {
    const newArr = list.map((node: FileNode) => {
      if (node.name === targetNode.name) {
        return callback(node);
      }
      if (node.files) {
        return {
          ...node,
          files: updateTree(node.files, targetNode, callback),
        };
      }
      return node;
    });
    return newArr;
  };

  const handleToggle = (node: FileNode) => {
    setFileFolderData((prev) =>
      updateTree(prev, node, (node: FileNode) => ({
        ...node,
        isOpen: !node.isOpen,
      })),
    );
  };

  const addFileToRoot = () => {
    if (!text) return;
    setFileFolderData([{ name: text }, ...fileFolderData]);
    setText("");
  };

  const addFileToFolder = (node: FileNode) => {
    if (!text) return;
    setFileFolderData((prev) =>
      updateTree(prev, node, (node: FileNode) => ({
        ...node,
        isOpen: true,
        files: [
          {
            name: text,
          },
          ...(node.files ?? []),
        ],
      })),
    );
    setText("");
  };

  const convertToFolder = (node: FileNode) => {
    if (!node.files) {
      setFileFolderData((prev) =>
        updateTree(prev, node, (node: FileNode) => ({
          ...node,
          files: [],
        })),
      );
    }
  };

  return (
    <div className="file-folder-container">
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value.trim())}
        />
        <button onClick={addFileToRoot}>+</button>
      </div>
      <div className="file-list-container">
        <FileList
          fileFolderData={fileFolderData}
          handleToggle={handleToggle}
          addFileToFolder={addFileToFolder}
          convertToFolder={convertToFolder}
        />
      </div>
    </div>
  );
};

export default FileExplorer;
