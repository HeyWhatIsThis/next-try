import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { useState } from "react";
import { picture } from "../assets/genetics.jpg";

const slideImages = [
  {
    url: "https://www.rti.org/sites/default/files/istock_56013860_molecule_computer_2500.jpg",
    title: "Picture Title",
    caption: "Caption",
  },
  {
    url: "https://itsnotacareer.files.wordpress.com/2019/06/bioinformatics_banner_1140x400.jpg",
    title: "Picture Title",
    caption: "Caption",
  },
  {
    url: "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2021/03/Bioinformatics-careers.jpg",
    title: "Picture Title",
    caption: "Caption",
  },
];

const properties = {
  indicators: true,
};

export const Slideshow = () => {
  const [controlIndex, setControlIndex] = useState(0);
  return (
    <div className="container pb-5 text-base z-0">
      <div className="flex w-full md:max-w-5xl">
        <Slide className="h-96 w-full" {...properties}>
          {slideImages.map((slideImage, index) => (
            <div onChange={() => setControlIndex(index)} key={index}>
              <div
                className="h-96 w-full"
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span className="ml-2 text-gray-900 text-base font-normal bg-blue-50 hover:bg-white">
                  {slideImage.caption}
                </span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};
