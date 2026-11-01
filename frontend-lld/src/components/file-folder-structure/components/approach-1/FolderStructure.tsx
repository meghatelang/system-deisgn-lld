import { useState } from "react";
import FileList from "./FileList";
import { initialData, type FileNode } from "../../utils/data";
import "./file-folder.css";

const FolderStruture = () => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button onClick={() => {}}>+</button>
      </div>
      <div className="folder-container">
        <FileList inputVal={text} fileFolderData={initialData} />
      </div>
    </>
  );
};

export default FolderStruture;
