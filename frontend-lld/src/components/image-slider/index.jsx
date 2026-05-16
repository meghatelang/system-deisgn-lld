import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const images = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
  "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
  "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
];

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   // for auto sliding after 3s
  //   const interval = setInterval(() => {
  //     setActive((prev) => (prev + 1) % images.length);
  //   }, 3000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="flex items-center">
      <button className="cursor-pointer">
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2xl"
          onClick={() =>
            setActive((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1))
          }
        />
      </button>
      <img src={images[active]} className="w-200 h-100" />
      <button className="cursor-pointer">
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2xl"
          onClick={() => setActive((prev) => (prev + 1) % images.length)}
        />
      </button>
    </div>
  );
};

export default ImageSlider;
