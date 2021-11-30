import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Footer } from "../components/Footer";

const slideImages = [
  {
    url: "https://www.rti.org/sites/default/files/istock_56013860_molecule_computer_2500.jpg",
    caption: "",
  },
  {
    url: "https://www.mayo.edu/-/media/kcms/gbs/research/images/2019/02/06/15/18/genetics-bioinformatics-shu-571040611-8col.jpg",
    caption: "",
  },
  {
    url: "https://omgenomics.com/assets/bioinformatics-data-science-venn-diagrams.png",
    caption: "",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 h-screen">
      <Head>
        <title>KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="container w-full md:max-w-5xl mx-auto pt-8">
        <div className="container">
          <Slide style={{ height: "350px" }}>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    height: "350px",
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <div>
          <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            KSU BioInformatics Lab
          </h1>
          <hr />
          <p className="my-5">This is where the news should go</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
