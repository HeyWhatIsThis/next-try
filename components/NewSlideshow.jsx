import React from "react";
import Slider from "react-slick";

const slideImages = [
  {
    url: "https://www.rti.org/sites/default/files/istock_56013860_molecule_computer_2500.jpg",
    title: "Picture Title",
    caption: "Describe picture in a few sentences here.",
  },
  {
    url: "https://www.mayo.edu/-/media/kcms/gbs/research/images/2019/02/06/15/18/genetics-bioinformatics-shu-571040611-8col.jpg",
    title: "Picture Title",
    caption: "Describe picture in a few sentences here.",
  },
  {
    url: "https://omgenomics.com/assets/bioinformatics-data-science-venn-diagrams.png",
    title: "Picture Title",
    caption: "Describe picture in a few sentences here.",
  },
];

export const NewSlideshow = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };
  return (
    <Slider {...settings} className="mb-4 pb-2 h-96 w-96">
      <div className="h-96 w-full">
        <img src={slideImages[0].url}></img>
      </div>
      <div className="h-96 w-full">
        <img src={slideImages[1].url}></img>
      </div>
      <div className="h-96 w-full">
        <img src={slideImages[2].url}></img>{" "}
      </div>
    </Slider>
  );
};
