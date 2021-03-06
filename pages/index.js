import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Slideshow } from "../components/Slideshow";
import { NewSlideshow } from "../components/NewSlideshow";
import "react-slideshow-image/dist/styles.css";
import { Footer } from "../components/Footer";

{
  /*
  TODO: remake slideshow component so you can display captions on the sides
  TODO: make the background color go all the way down
  */
}
export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen w-screen">
      <Head>
        <title>KSU Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container w-full md:max-w-5xl px-5 sm:mx-auto  pt-10 mt-10 ">
        <Slideshow />
        <div className="text-gray-900">
          <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-3xl">
            Computational Healthcare and Biotechnology (COHB) Lab
          </h1>
          <hr />
          <div className="grid md:grid-cols-2 md:divide-x my-5">
            <div>
              <h5 className="font-semibold my-5 text-lg">Introduction</h5>
              <p className="my-5 text-base">
                We are a research group at Kennesaw State University...
              </p>
            </div>
            <div className="md:pl-3">
              <h5 className="font-semibold my-5 text-lg">Latest News</h5>
              <p className="my-5 text-base">
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
