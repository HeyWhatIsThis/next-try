import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Footer } from "../components/Footer";

const slideImages = [
  {
    url: "https://www.rti.org/sites/default/files/istock_56013860_molecule_computer_2500.jpg",
    caption: "Caption",
  },
  {
    url: "https://www.mayo.edu/-/media/kcms/gbs/research/images/2019/02/06/15/18/genetics-bioinformatics-shu-571040611-8col.jpg",
    caption: "Caption",
  },
  {
    url: "https://omgenomics.com/assets/bioinformatics-data-science-venn-diagrams.png",
    caption: "Caption",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen">
      <Head>
        <title>KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* container w-full md:max-w-5xl mx-auto pt-10 mt-10 */}
      <main className=" container w-full md:max-w-5xl mx-auto pt-10 mt-10 ">
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
                  <span className="ml-2 text-gray-900 text-base font-normal hover:bg-blue-50	">
                    {slideImage.caption}
                  </span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <div className="text-gray-900">
          <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-3xl">
            Computational Healthcare and Biotechnology (COHB) Lab
          </h1>
          <hr />
          <div className="grid grid-cols-2 divide-x my-5">
            <div>
              <h5 className="font-semibold my-5 text-lg">Introduction</h5>
              <p className="my-5 text-base">
                We are a research group at Kennesaw State University...
              </p>
            </div>
            <div>
              <h5 className="font-semibold my-5 text-lg ml-3">News</h5>
              <p className="my-5 ml-3 text-base">
                Images and captions for news posts go here
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer className="mt-20 z-10" />
    </div>
  );
}
