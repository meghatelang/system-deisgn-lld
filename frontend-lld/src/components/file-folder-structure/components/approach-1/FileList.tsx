import React, { useState } from "react";
import { type FileNode } from "../../utils/data";
import FileData from "./FileData";

interface ListProps {
  inputVal: string;
  fileFolderData: FileNode[];
  handleOpenClose?: (node: FileNode) => void;
  handleFileAdd?: (node: FileNode) => void;
  onDoubleClick?: (node: FileNode) => void;
}

const FileList = ({ inputVal, fileFolderData }: ListProps) => {
  const [data, setData] = useState<FileNode[]>(fileFolderData);

  const handleOpenClose = (fileNode: FileNode) => {
    const newArr = data?.map((node) => {
      console.log("toggle here", node, fileNode);

      if (node.name === fileNode.name) {
        return { ...node, isOpen: !node.isOpen };
      }
      return node;
    });
    setData(newArr);
  };

  const handleFileAdd = (fileNode: FileNode) => {
    if (inputVal.trim()) {
      const newArr = data?.map((node) => {
        console.log("comes here 3", fileNode);
        if (node.name === fileNode.name) {
          console.log("here add click before", node, fileNode.name);

          return {
            ...node,
            isOpen: true,
            files: [
              {
                name: inputVal,
              },
              ...(node.files || []),
            ],
          };
        }
        return node;
      });
      console.log("new arr here", newArr);
      setData(newArr);
    }
  };

  const onDoubleClick = (fileNode: FileNode) => {
    if (!fileNode.files) {
      const newArr = data?.map((node) => {
        console.log("here double click before", node, fileNode.name);

        if (node.name === fileNode.name) {
          return {
            ...node,
            isOpen: true,
            files: [],
          };
        }
        return node;
      });
      console.log("here double click", newArr);
      setData(newArr);
    }
  };

  return (
    <ul>
      <FileData
        fileFolderData={data}
        handleOpenClose={handleOpenClose}
        inputVal={inputVal}
        handleFileAdd={handleFileAdd}
        onDoubleClick={onDoubleClick}
      />
    </ul>
  );
};

export default FileList;
