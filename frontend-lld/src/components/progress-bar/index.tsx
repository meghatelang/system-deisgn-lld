import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (delta: number) => {
    setProgress((prev) => Math.max(0, Math.min(100, prev + delta)));
  };

  const getProgressColor = () => {
    if (progress === 0) return "bg-gray-200";
    if (progress < 40) return "bg-red-600";
    if (progress >= 40 && progress <= 79) return "bg-orange-600";
    return "bg-green-600";
  };
  return (
    <div>
      <div className="h-8 border-black-200 bg-gray-200 rounded-full m-2 relative">
        <div
          className={`${getProgressColor()} w-[${progress}%] h-full rounded-full tarnsition-width duration-300`}
        ></div>
        <span className="flex items-center justify-center text-gray-600 absolute top-0 left-[50%]">
          {progress} %
        </span>
      </div>
      <div className="flex">
        <button
          className="border border-black-200 bg-gray-200 rounded-full p-2 cursor-pointer"
          onClick={() => updateProgress(-10)}
        >
          -10%
        </button>
        <button
          className="border border-black-200 bg-gray-200 rounded-full p-2 ml-2 cursor-pointer"
          onClick={() => updateProgress(+10)}
        >
          +10%
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
